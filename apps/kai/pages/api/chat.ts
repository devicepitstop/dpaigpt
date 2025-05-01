import OpenAI from 'openai';

// 🔑 Env-check
console.log(
  '🔑 OPENAI_SECRET_KEY is',
  process.env.OPENAI_SECRET_KEY ? '[redacted]' : '<<MISSING>>'
);

// Instantiate the new client
const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY });

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
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
    console.log('💬 Calling OpenAI with prompt:', text);
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: text }],
    });
    const reply = completion.choices?.[0]?.message?.content?.trim() ?? '';
    res.status(200).json({ reply });
  } catch (error: any) {
    console.error('Chat error:', error);
    if (error.cause) {
      console.error('OpenAI error cause:', error.cause);
    }
    res.status(500).json({ error: 'OpenAI error' });
  }
}
