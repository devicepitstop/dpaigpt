// apps/kai/src/lib/db.ts
import { PrismaClient } from '../../../../generated/prisma';

const prisma = new PrismaClient();

export interface TranscriptRecord {
  sessionId: string;
  rawText: string;
  detectedIntent: unknown;
  actionTaken: unknown;
}

export async function saveTranscript(record: TranscriptRecord) {
  return prisma.transcript.create({
    data: {
      sessionId: record.sessionId,
      rawText: record.rawText,
      detectedIntent: record.detectedIntent,
      actionTaken: record.actionTaken,
    },
  });
}
