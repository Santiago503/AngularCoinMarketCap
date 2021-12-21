export interface CryptoCoin {
  status: Status | null;
  data: { [key: string]: Crypto; };
}

export interface Status {
  timestamp: string | null;
  error_code: number | null;
  error_message: any | null;
  elapsed: number | null;
  credit_count: number | null;
  notice: any;
}

export interface Crypto {
  id: number | null;
  name: string | null;
  symbol: string | null;
  slug: string | null;
  last_updated: string | null;
  quote: { [key: string]: Currency; };
}

export interface Currency {
  price: number | null;
  last_updated: string | null;
}
