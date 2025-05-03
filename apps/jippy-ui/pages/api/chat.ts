import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY });

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
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: text }],
    });
    const reply = completion.choices?.[0]?.message?.content?.trim() || '';
    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error('Chat error:', error);
    return res.status(500).json({ error: 'OpenAI error' });
  }
}
