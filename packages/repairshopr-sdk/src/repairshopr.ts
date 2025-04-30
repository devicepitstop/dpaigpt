// packages/repairshopr-sdk/src/repairshopr.ts

export class RepairShoprClient {
    constructor(
      private readonly domain: string,
      private readonly apiToken: string
    ) {}
  
    private async req<T = unknown>(
      path: string,
      opts: RequestInit & { params?: Record<string, string | number | undefined> } = {}
    ): Promise<T> {
      const url = new URL(`https://${this.domain}/api/v1${path}`);
      url.searchParams.set('api_key', this.apiToken);
  
      if (opts.params) {
        for (const [k, v] of Object.entries(opts.params)) {
          if (v !== undefined) url.searchParams.set(k, String(v));
        }
      }
  
      const res = await fetch(url.toString(), {
        ...opts,
        headers: {
          'Content-Type': 'application/json',
          ...(opts.headers ?? {})
        }
      });
  
      if (!res.ok) {
        throw new Error(`RepairShopr ${res.status} – ${await res.text()}`);
      }
  
      return res.json() as Promise<T>;
    }
  
    tickets = {
      create: (body: any) =>
        this.req('/tickets', { method: 'POST', body: JSON.stringify(body) }),
  
      update: (id: number, body: any) =>
        this.req(`/tickets/${id}`, { method: 'PUT', body: JSON.stringify(body) }),
  
      addNote: (id: number, body: string) =>
        this.req(`/tickets/${id}/notes`, {
          method: 'POST',
          body: JSON.stringify({ body, public: true })
        }),
  
      list: (params?: Record<string, any>) =>
        this.req('/tickets', { params }),
  
      get: (id: number) =>
        this.req(`/tickets/${id}`)
    };
  
    customers = {
      messages: (id: number, body: string) =>
        this.req(`/customers/${id}/messages`, {
          method: 'POST',
          body: JSON.stringify({ body, subject: 'Repair Update' })
        })
    };
  }
  