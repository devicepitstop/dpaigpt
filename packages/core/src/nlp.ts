// packages/core/src/nlp.ts

import levenshtein from 'fast-levenshtein';

/* ---------- Types ---------- */
export type Priority = 'Low' | 'Normal' | 'High';
export type Status = 'Completed' | 'In Progress' | 'Pending' | 'Waiting on Customer';

export interface CreateIntent {
  kind: 'create';
  subject: string;
  problem_type: string;
  priority: Priority;
  parts_needed: string[];
}

export interface UpdateIntent {
  kind: 'update';
  customerName: string;
  status: Status;
  note: string;
  amountOwed?: number;
}

export type Intent = CreateIntent | UpdateIntent | { kind: 'none' };

/* ---------- Keyword map for create flow ---------- */
const PROBLEMS = {
  battery:  { type: 'Battery',          priority: 'High',   part: 'Battery' },
  screen:   { type: 'Display',          priority: 'Normal', part: 'Replacement Screen' },
  charger:  { type: 'Charging Port',    priority: 'Normal', part: 'Charging Port' },
  keyboard: { type: 'Keyboard',         priority: 'Normal', part: 'Keyboard' }
} as const;

/* ---------- Main parser ---------- */
export function detectIntent(raw: string): Intent {
  const text = raw.toLowerCase();

  /* --- update ticket intent --------------------------------------- */
  if (/update (.+?)'s ticket/.test(text)) {
    const customerName = text.match(/update (.+?)'s ticket/)![1].trim();

    const status: Status =
      (['In Progress', 'Pending', 'Waiting on Customer'] as const)
        .find((s) => text.includes(s)) ?? 'Completed';

    const amtMatch = text.match(/\$([\d.]+)/);
    const amountOwed = amtMatch ? Number(amtMatch[1]) : undefined;

    const notePart =
      text.split(/tell (?:him|her|them)/i)[1] ??
      `Status changed to ${status}.`;

    return {
      kind: 'update',
      customerName,
      status,
      note: notePart.trim(),
      amountOwed
    };
  }

  /* --- create ticket intent --------------------------------------- */
  const keyword = Object.keys(PROBLEMS).find((k) => text.includes(k));
  if (!keyword) return { kind: 'none' };

  const meta = (PROBLEMS as any)[keyword];
  const urgent = /(swollen|smoke|sparking|fire)/.test(text);

  return {
    kind: 'create',
    subject: `${keyword} issue`,
    problem_type: meta.type,
    priority: urgent ? 'High' : meta.priority,
    parts_needed: [meta.part]
  };
}

/* ---------- Utility: fuzzy match similarity 0–1 ---------- */
export function similarity(a: string, b: string): number {
    const max = Math.max(a.length, b.length);
    return (max - levenshtein.get(a.toLowerCase(), b.toLowerCase())) / max;
  }
