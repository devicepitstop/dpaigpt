'use client';
import { useState } from 'react';

export default function Page() {
  const [resp, setResp] = useState<string>('');

  const pingKai = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/transcript', {
        method: 'GET',
      });
      const text = await res.text();
      setResp(`Status: ${res.status}\nBody: ${text}`);
    } catch (err: any) {
      setResp('Error: ' + err.message);
    }
  };

  return (
    <main style={{ padding: 32, textAlign: 'center' }}>
      <button
        onClick={pingKai}
        style={{ padding: '12px 24px', cursor: 'pointer' }}
      >
        Ping Kai
      </button>
      <pre style={{ marginTop: 24, whiteSpace: 'pre-wrap' }}>
        {resp}
      </pre>
    </main>
  );
}
