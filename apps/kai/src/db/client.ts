// apps/kai/src/db/client.ts

import { Pool } from '@neondatabase/serverless';
import { neonConfig } from '@neondatabase/serverless';

// Safety check
if (!process.env.DATABASE_URL) {
  throw new Error('Missing DATABASE_URL environment variable');
}

// Tell Neon to use fetch() — Edge runtime compatible
neonConfig.fetchConnectionCache = true;

export const db = new Pool({ connectionString: process.env.DATABASE_URL });
