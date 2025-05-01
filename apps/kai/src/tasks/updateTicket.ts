// apps/kai/src/tasks/updateTicket.ts
import { repairshopr } from '@devicepitstop/repairshopr-sdk';

export async function updateTicketByCustomer({
  customerName,
  status = 'Completed',
}: {
  customerName: string;
  status?: string;
}): Promise<number> {
  // find the customer
  const customers = await repairshopr.customers.search({ query: customerName });
  if (!customers.length) {
    throw new Error(`Customer "${customerName}" not found`);
  }
  const customer = customers[0];

  // find their open tickets
  const tickets = await repairshopr.tickets.list({
    customer_id: customer.id,
    status: 'open',
  });
  if (!tickets.length) {
    throw new Error(`No open tickets for "${customerName}"`);
  }
  const ticket = tickets[0];

  // update the ticket status
  await repairshopr.tickets.update(ticket.id, { status });
  return ticket.id;
}
