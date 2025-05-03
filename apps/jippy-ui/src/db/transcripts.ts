import { prisma } from '../lib/db';

export async function saveTranscript({
  sessionId,
  rawText,
  detectedIntent,
  actionTaken,
}: {
  sessionId: string;
  rawText: string;
  detectedIntent: any;
  actionTaken: any;
}) {
  return prisma.transcript.create({
    data: {
      sessionId,
      rawText,
      detectedIntent: JSON.stringify(detectedIntent),
      actionTaken: JSON.stringify(actionTaken),
      createdAt: new Date(),
    },
  });
}
