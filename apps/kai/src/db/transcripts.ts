// apps/kai/src/db/transcripts.ts

import { db } from './client';

interface SaveTranscriptParams {
  sessionId: string;
  rawText: string;
  detectedIntent: any; // can tighten later
  actionTaken: any;    // can tighten later
}

/**
 * Save a transcript record into Neon.
 */
export async function saveTranscript(params: SaveTranscriptParams) {
  const { sessionId, rawText, detectedIntent, actionTaken } = params;

  const query = `
    INSERT INTO transcripts (session_id, raw_text, detected_intent, action_taken)
    VALUES ($1, $2, $3, $4)
  `;

  const values = [
    sessionId,
    rawText,
    JSON.stringify(detectedIntent),
    JSON.stringify(actionTaken)
  ];

  await db.query(query, values);
}
