// apps/kai/src/test/nlp.spec.ts

import { describe, it, expect } from 'vitest';
import { detectIntent } from '@core/nlp';

describe('NLP parser sanity', () => {
  it('recognizes a create intent (battery)', () => {
    const out = detectIntent('my iphone 13 battery is swollen');
    expect(out.kind).toBe('create');
    if (out.kind === 'create') {
      expect(out.problem_type).toBe('Battery');
      expect(out.priority).toBe('High');
    }
  });

  it('recognizes an update intent', () => {
    const out = detectIntent("update John Doe's ticket to completed");
    expect(out.kind).toBe('update');
    if (out.kind === 'update') {
      expect(out.status).toBe('Completed');
      expect(out.customerName).toBe('John Doe');
    }
  });

  it('returns none for random chit-chat', () => {
    const out = detectIntent('how was your weekend?');
    expect(out.kind).toBe('none');
  });
});
