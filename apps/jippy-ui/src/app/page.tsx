// apps/jippy-ui/src/app/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

type Message = { sender: 'user' | 'jippy'; text: string };

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([]);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const append = (sender: Message['sender'], text: string) =>
    setMessages((m) => [...m, { sender, text }]);

  const speak = (text: string) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.onstart = () => recognitionRef.current?.stop();
    utter.onend = () => {
      try { recognitionRef.current?.start(); } catch { /* ignore */ }
    };
    window.speechSynthesis.speak(utter);
  };

  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      console.error('SpeechRecognition not supported');
      return;
    }
    const recog = new SR();
    recog.continuous = true;
    recog.interimResults = false;
    recognitionRef.current = recog;

    recog.onresult = async (ev) => {
      const transcript = ev.results[ev.resultIndex][0].transcript.trim();
      console.log('🎙 Transcript:', transcript);
      
      // match either “hey jippy” or “hey jiffy” (case-insensitive)
      const match = transcript.toLowerCase().match(/^(hey jipp(?:y|i))\s+(.*)$/i);
      if (!match) return;

      const [, wake, command] = match;
      console.log('🔔 Wake-word hit. Command →', command);
      append('user', command);
      recog.stop();

      // 1) Call your transcript endpoint
      let actionTaken: any = { action: 'none' };
      try {
        const r1 = await fetch('/api/transcript', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: transcript }),
        });
        const json1 = await r1.json();
        actionTaken = json1.actionTaken;
        console.log('/api/transcript →', json1);
      } catch (e) {
        console.error('transcript error', e);
      }

      // 2) If Kai actually did something, confirm it
      if (actionTaken.action !== 'none') {
        let confirmText = '';
        if (actionTaken.action === 'update_ticket') {
          confirmText = `Ticket ${actionTaken.ticketId} for ${actionTaken.customer} updated.`;
        } else if (actionTaken.action === 'create_ticket') {
          confirmText = `Created ticket for ${actionTaken.subject}.`;
        }
        if (confirmText) {
          append('jippy', confirmText);
          speak(confirmText);
        }
      }

      // 3) Always fall back to the AI chat reply
      try {
        const r2 = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: command }),
        });
        const { reply } = await r2.json();
        console.log('/api/chat →', reply);
        append('jippy', reply);
        speak(reply);
      } catch (e) {
        console.error('chat error', e);
      }
    };

    recog.onerror = (ev: SpeechRecognitionErrorEvent) => {
      // quietly skip no-speech errors
      if (ev.error !== 'no-speech') {
        console.error('SpeechRecognitionError', ev.error);
      }
    };

    recog.onend = () => {
      console.log('🔁 recognition ended, restarting in 500ms...');
      setTimeout(() => {
        try { recog.start(); } catch {}
      }, 500);
    };

    // start it up
    try {
      recog.start();
      console.log('🔊 Mic listener started. Say “Hey Jippy …”');
    } catch (e) {
      console.error('Failed to start recognition', e);
    }

    return () => recog.stop();
  }, []);

  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Jippy 🔊</h1>
      <div style={{ maxWidth: 600, margin: '20px auto' }}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: m.sender === 'user' ? 'right' : 'left',
              margin: '8px 0',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '8px 12px',
                borderRadius: 16,
                background: m.sender === 'user' ? '#cce5ff' : '#e2e3e5',
              }}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', color: '#666' }}>
        Just say anything—Jippy listens, saves, and responds.
      </p>
    </main>
  );
}
