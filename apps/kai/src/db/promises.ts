// apps/kai/src/db/promises.ts

import { db } from './client';

interface SavePromiseParams {
  customerName: string;
  promiseText: string;
  dueTime: Date;
}

/**
 * Save a new promise (customer reminder) into Neon.
 */
export async function savePromise(params: SavePromiseParams) {
  const { customerName, promiseText, dueTime } = params;

  const query = `
    INSERT INTO promises (customer_name, promise_text, due_time)
    VALUES ($1, $2, $3)
  `;

  const values = [customerName, promiseText, dueTime.toISOString()];

  await db.query(query, values);
}

/**
 * Mark a promise as fulfilled.
 */
export async function fulfillPromise(promiseId: string) {
  const query = `
    UPDATE promises
    SET fulfilled = true
    WHERE id = $1
  `;

  const values = [promiseId];

  await db.query(query, values);
}
