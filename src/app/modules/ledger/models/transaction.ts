export interface LedgerTransaction {
    id?: number;
    date: string;
    description: string;
    amountGiven: number;
    amountReceived: number;
    balance?: number; // Optional, for client-side use
  }