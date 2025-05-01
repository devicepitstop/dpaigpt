import { parseIntent } from '../lib/parseIntent';
import { updateTicketByCustomer } from './updateTicket';
import { createTicketForSubject } from './createTicket';
import { saveTranscript } from '../lib/db';

export async function handleAndSaveTranscript({
  rawText,
}: {
  rawText: string;
}) {
  const intent = parseIntent(rawText);
  let actionTaken: any = { action: 'none' };

  if (intent.kind === 'create') {
    const ticketId = await createTicketForSubject({ subject: intent.subject });
    actionTaken = {
      action: 'create_ticket',
      ticketId,
      subject: intent.subject,
    };
  } else if (intent.kind === 'update') {
    const ticketId = await updateTicketByCustomer({
      customerName: intent.customerName,
    });
    actionTaken = {
      action: 'update_ticket',
      customer: intent.customerName,
      ticketId,
    };
  }

  await saveTranscript({
    sessionId: 'anon',
    rawText,
    detectedIntent: intent,
    actionTaken,
  });

  return { success: true, actionTaken };
}
