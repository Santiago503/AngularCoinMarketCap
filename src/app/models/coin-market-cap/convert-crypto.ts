export interface Currency {
  name: string;
  price: number;
  last_updated: Date;
}

export interface CryptoDataConvert {
  id: number;
  name: string;
  symbol: string;
  slug?: any;
  amount: number;
  last_updated: Date;
  quote: Currency[];
}
