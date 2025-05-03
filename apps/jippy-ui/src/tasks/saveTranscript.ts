import { detectIntent } from '@devicepitstop/core';
import { saveTranscript } from '../db/transcripts';  // these paths must match your folder
import { savePromise }    from '../db/promises';
import { updateTicketByCustomer } from './updateTicket';
import { v4 as uuidv4 } from 'uuid';

interface HandleTranscriptOptions { rawText: string; }

export async function handleAndSaveTranscript({ rawText }: HandleTranscriptOptions) {
  const sessionId = uuidv4();
  const intent    = detectIntent(rawText);
  let actionTaken: any = { action: 'none' };

  if (intent.kind === 'create') {
    actionTaken = { action: 'create_ticket', subject: intent.subject };
    // optionally: await createTicketForSubject({ subject: intent.subject });
  } else if (intent.kind === 'update') {
    const ticketId = await updateTicketByCustomer({ customerName: intent.customerName });
    actionTaken = { action: 'update_ticket', customer: intent.customerName, ticketId };
  }

  await saveTranscript({ sessionId, rawText, detectedIntent: intent, actionTaken });

  if (intent.kind === 'update' && intent.note) {
    const match = intent.note.match(/by (\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i);
    if (match) {
      let hour   = parseInt(match[1], 10);
      const min  = match[2] ? parseInt(match[2], 10) : 0;
      const ampm = match[3]?.toLowerCase();
      if (ampm === 'pm' && hour < 12) hour += 12;
      if (ampm === 'am' && hour === 12) hour = 0;
      const due = new Date();
      due.setHours(hour, min, 0, 0);
      await savePromise({ customerName: intent.customerName, promiseText: intent.note, dueTime: due });
    }
  }

  return { success: true, actionTaken };
}
