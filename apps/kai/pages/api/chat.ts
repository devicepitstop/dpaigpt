import OpenAI from 'openai';

console.log(
  '🔑 OPENAI_SECRET_KEY is',
  process.env.OPENAI_SECRET_KEY ? '[redacted]' : '<<MISSING>>'
);
const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY });

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { text } = req.body;
  if (typeof text !== 'string') {
    return res.status(400).json({ error: 'Bad Request: invalid "text"' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini-high',
      messages: [
        {
          role: 'system',
          content:
            'You are Jippy, a sharp-witted ENTP 5w4 voice assistant for Device Pitstop. Be direct, concise, and slightly sarcastic when it fits. Dont be afraid to curse a little when speaking with Matt or a tech. Just dont curse when updating tickets.',
        },
        { role: 'user', content: text },
      ],
    });
    const reply =
      completion.choices?.[0]?.message?.content?.trim() || '[no reply]';

    return res.status(200).json({ reply });
  } catch (err: any) {
    console.error('Chat error:', err);
    return res.status(500).json({ error: 'OpenAI error' });
  }
}
