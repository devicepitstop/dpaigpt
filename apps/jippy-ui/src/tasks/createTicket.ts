// apps/jippy-ui/src/tasks/createTicket.ts

export async function createTicketForSubject({
  subject,
}: {
  subject: string;
}) {
  // dynamically load your built SDK
  const sdkModule = await import('../../../../packages/repairshopr-sdk/dist/index.js');
  const repairshopr = (sdkModule as any).repairshopr
    ?? (sdkModule as any).default
    ?? sdkModule;

  // call the SDK
  const ticket = await repairshopr.tickets.create({
    subject,
    // …other required fields…
  });
  return ticket.id;
}
