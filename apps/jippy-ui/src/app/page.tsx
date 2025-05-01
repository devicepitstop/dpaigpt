'use client';
import { useState, useEffect, useRef } from 'react';

type Msg = { sender: 'you' | 'jippy'; text: string };

export default function Page() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const speakingRef = useRef(false);

  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      console.warn('SpeechRecognition not supported');
      return;
    }

    const recog = new SR();
    recognitionRef.current = recog;
    recog.continuous = true;
    recog.interimResults = false;
    recog.lang = 'en-US';

    recog.onstart = () => setListening(true);
    recog.onend = () => {
      setListening(false);
      recog.start();
    };

    recog.onresult = async (evt: any) => {
      if (speakingRef.current) return;

      const transcript = Array.from(evt.results)
        .slice(evt.resultIndex)
        .map((r: any) => r[0].transcript)
        .join('')
        .trim();

      // Display user message
      setMsgs((m) => [...m, { sender: 'you', text: transcript }]);

      // Save transcript to Kai
      fetch('http://localhost:3000/api/transcript', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: transcript }),
      });

      // Fetch Jippy’s reply
      const res = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: transcript }),
      });
      const { reply } = await res.json();

      // Display Jippy’s reply
      setMsgs((m) => [...m, { sender: 'jippy', text: reply }]);

      // Speak Jippy’s reply
      const utter = new SpeechSynthesisUtterance(reply);
      utter.onstart = () => {
        speakingRef.current = true;
        recognitionRef.current?.stop();
      };
      utter.onend = () => {
        speakingRef.current = false;
        recognitionRef.current?.start();
      };
      window.speechSynthesis.speak(utter);
    };

    recog.start();
    return () => recog.stop();
  }, []);

  return (
    <main style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
      <h2>Jippy {listening ? '🔊' : '🔈'}</h2>
      <div style={{ minHeight: 200, margin: '1rem 0' }}>
        {msgs.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: m.sender === 'you' ? 'right' : 'left',
              margin: '0.5rem 0',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                borderRadius: 12,
                background: m.sender === 'you' ? '#e0f7fa' : '#f1f8e9',
              }}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 12, opacity: 0.6 }}>
        Just say anything—Jippy listens, saves, and responds.
      </p>
    </main>
  );
}
