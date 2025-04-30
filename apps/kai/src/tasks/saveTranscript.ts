// apps/kai/src/tasks/saveTranscript.ts

import { detectIntent } from '@core/nlp';
import { saveTranscript } from '@backend/db/transcripts';
import { savePromise } from '@backend/db/promises';
import { v4 as uuidv4 } from 'uuid';

interface HandleTranscriptOptions {
  rawText: string;
}

/**
 * Full save orchestration:
 *  - Parse intent
 *  - Save transcript
 *  - Queue a promise if detected
 */
export async function handleAndSaveTranscript({ rawText }: HandleTranscriptOptions) {
  const sessionId = getCurrentSessionId();
  const intent = detectIntent(rawText);

  let actionTaken: any = { action: 'none' };

  if (intent.kind === 'create') {
    actionTaken = { action: 'create_ticket', subject: intent.subject };
  } else if (intent.kind === 'update') {
    actionTaken = { action: 'update_ticket', customer: intent.customerName };
  }

  // Save transcript first
  await saveTranscript({
    sessionId,
    rawText,
    detectedIntent: intent,
    actionTaken
  });

  // If we can detect a promise (e.g., "done by 2pm"), save it
  if (intent.kind === 'update' && intent.note) {
    const match = intent.note.match(/by (\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i);
    if (match) {
      const hour = parseInt(match[1], 10);
      const minute = match[2] ? parseInt(match[2], 10) : 0;
      const ampm = match[3]?.toLowerCase();

      let realHour = hour;
      if (ampm === 'pm' && hour < 12) realHour += 12;
      if (ampm === 'am' && hour === 12) realHour = 0;

      const due = new Date();
      due.setHours(realHour);
      due.setMinutes(minute);
      due.setSeconds(0);
      due.setMilliseconds(0);

      await savePromise({
        customerName: intent.customerName,
        promiseText: intent.note,
        dueTime: due
      });
    }
  }

  return { success: true };
}

/**
 * Dummy session generator — rotates every day.
 */
function getCurrentSessionId(): string {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, '0');
  const d = String(now.getUTCDate()).padStart(2, '0');
  return uuidv4(); // for now random; can be improved to day-based if needed
}
