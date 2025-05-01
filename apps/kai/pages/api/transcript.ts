// apps/kai/pages/api/transcript.ts
import { handleAndSaveTranscript } from '../../src/tasks/saveTranscript';

export default async function handler(req: any, res: any) {
  // CORS setup
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only POST
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { text } = req.body;
  if (typeof text !== 'string') {
    res.status(400).json({ error: 'Bad Request: invalid "text"' });
    return;
  }

  try {
    const result = await handleAndSaveTranscript({ rawText: text });
    res.status(200).json(result);
  } catch (e: any) {
    console.error('Transcript handler error:', e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
