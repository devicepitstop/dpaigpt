import sounddevice as sd
import numpy as np
from faster_whisper import WhisperModel
import httpx
import asyncio

# CONFIG
WAKE_WORD   = "hey kai"
KAI_URL     = "http://localhost:3000/api/transcript"
SAMPLE_RATE = 16000
CHUNK_SEC   = 4  # seconds per chunk

# Load model
model = WhisperModel("small", device="cpu")

def record_chunk():
    print("[…] Recording chunk")
    data = sd.rec(int(CHUNK_SEC * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype="int16")
    sd.wait()
    audio = np.squeeze(data.astype("float32")) / 32768.0
    return audio

def transcribe(audio):
    segments, _ = model.transcribe(audio, beam_size=5)
    text = "".join([seg.text for seg in segments]).strip()
    return text

async def send_to_kai(text):
    try:
        async with httpx.AsyncClient() as client:
            print(f"[→] Posting to Kai: {text!r}")
            res = await client.post(KAI_URL, json={"text": text})
            print(f"[←] Kai status {res.status_code}, body:", res.text)
    except Exception as e:
        print("⚠ Error sending to Kai:", e)

def chunk_listener():
    print("🔊 Mic listener started. Say “Hey Kai …”")
    while True:
        audio = record_chunk()
        txt = transcribe(audio)
        lower = txt.lower().strip()
        print("🎙 Transcript:", txt)

        if WAKE_WORD in lower:
            idx = lower.find(WAKE_WORD)
            raw_cmd = txt[idx + len(WAKE_WORD):]      # e.g. ", what's the…"
            # strip leading punctuation/spaces
            cmd = raw_cmd.lstrip(" ,.:;!?\"'—–-").strip()
            print("🔔 Wake-word hit. Command →", repr(cmd))
            if cmd:
                asyncio.run(send_to_kai(cmd))
            else:
                print("⚠ No command text after wake-word.")
        else:
            print("…no wake-word detected.")

if __name__ == "__main__":
    chunk_listener()
