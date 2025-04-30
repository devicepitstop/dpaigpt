// apps/kai/src/api/transcript.ts

import { handleAndSaveTranscript } from '@backend/tasks/saveTranscript';

export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { text } = await req.json();

    if (typeof text !== 'string') {
      return new Response('Bad Request: Missing or invalid "text"', { status: 400 });
    }

    await handleAndSaveTranscript({ rawText: text });

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    console.error('[transcript error]', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
