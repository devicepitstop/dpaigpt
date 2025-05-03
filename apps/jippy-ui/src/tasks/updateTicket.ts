// apps/jippy-ui/src/tasks/updateTicket.ts

export async function updateTicketByCustomer({
  customerName,
  status = 'Completed',
}: {
  customerName: string;
  status?: 'Pending' | 'In Progress' | 'Completed' | 'Waiting on Customer';
}) {
  const sdkModule = await import('../../../../packages/repairshopr-sdk/dist/index.js');
  const repairshopr = (sdkModule as any).repairshopr
    ?? (sdkModule as any).default
    ?? sdkModule;

  // 1) find customer
  const customers = await repairshopr.customers.search({ query: customerName });
  if (!customers.length) throw new Error(`Customer "${customerName}" not found`);
  const customer = customers[0];

  // 2) find open ticket
  const tickets = await repairshopr.tickets.list({
    customer_id: customer.id,
    status: 'open',
  });
  if (!tickets.length) throw new Error(`No open tickets for "${customerName}"`);
  const ticket = tickets[0];

  // 3) update it
  await repairshopr.tickets.update(ticket.id, { status });
  return ticket.id;
}
