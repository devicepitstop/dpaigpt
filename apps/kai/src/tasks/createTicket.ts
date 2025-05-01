import { repairshopr } from '@devicepitstop/repairshopr-sdk';

export async function createTicketForSubject({
  subject,
}: {
  subject: string;
}): Promise<number> {
  const ticket = await repairshopr.tickets.create({
    subject,
    status: 'open',
  });
  return ticket.id;
}
