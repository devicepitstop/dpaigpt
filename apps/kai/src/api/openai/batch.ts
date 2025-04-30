// apps/kai/src/api/openai/batch.ts

function b64(data: Uint8Array): string {
    return Buffer.from(data).toString('base64');
  }  

export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const key = process.env.OPENAI_SECRET_KEY;
  if (!key) return new Response('OPENAI key missing', { status: 500 });

  const wavBuf = await req.arrayBuffer(); // raw WAV bytes

  // Craft multipart/form-data manually
  const boundary = crypto.randomUUID();
  const form = [
    `--${boundary}`,
    'Content-Disposition: form-data; name="file"; filename="chunk.wav"',
    'Content-Type: audio/wav',
    '',
    b64(new Uint8Array(wavBuf)), // base64 payload
    `--${boundary}`,
    'Content-Disposition: form-data; name="model"',
    '',
    'whisper-1',
    `--${boundary}--`,
    ''
  ].join('\r\n');

  const r = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${key}`,
      'Content-Type': `multipart/form-data; boundary=${boundary}`
    },
    body: form
  });

  return new Response(await r.text(), {
    status: r.status,
    headers: { 'Content-Type': 'application/json' }
  });
}
