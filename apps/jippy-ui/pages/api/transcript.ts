import { handleAndSaveTranscript } from '../../src/tasks/saveTranscript';

export default async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const { text } = req.body;
  if (typeof text !== 'string') return res.status(400).json({ error: 'Bad Request' });

  try {
    const result = await handleAndSaveTranscript({ rawText: text });
    return res.status(200).json(result);
  } catch (e) {
    console.error('Handler error:', e);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
