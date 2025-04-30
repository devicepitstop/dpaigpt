// apps/kai/src/api/cron/curate-parts.ts

import { RepairShoprClient } from '@devicepitstop/repairshopr-sdk';

export const config = {
  runtime: 'edge',
  schedule: '0 13 * * *' // cron setting (redundant with vercel.json)
};

export default async function handler() {
  const rs = new RepairShoprClient(
    process.env.RS_DOMAIN!,
    process.env.RS_API_TOKEN!
  );

  // Dummy lightweight call so Vercel cron job has something to await
  await rs.tickets.list({ page: 1, per_page: 1 });

  return new Response('ok');
}
