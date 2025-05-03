export type Intent =
  | { kind: 'create'; subject: string }
  | { kind: 'update'; customerName: string }
  | { kind: 'none' };

/**
 * Super-light intent parser:
 *  - “create ticket about X” → { kind: 'create', subject: X }
 *  - “update ticket for Y”    → { kind: 'update', customerName: Y }
 *  - otherwise                 → { kind: 'none' }
 */
export function parseIntent(rawText: string): Intent {
  const text = rawText.trim();

  // update intent
  const upd = text.match(/(?:update|complete|mark\s+as\s+done).*(?:ticket|job)\s+for\s+(\w+)/i);
  if (upd) {
    const name = upd[1];
    return { kind: 'update', customerName: name.charAt(0).toUpperCase()+name.slice(1) };
  }

  // create intent
  const crt = text.match(/(?:create|new)\s+ticket(?:\s+about)?\s+(.+)/i);
  if (crt) {
    return { kind: 'create', subject: crt[1].trim() };
  }

  return { kind: 'none' };
}
