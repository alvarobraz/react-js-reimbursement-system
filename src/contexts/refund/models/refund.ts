export interface Receipt {
  originalFilename: string;
  filename: string;
  path: string;
  extname: string;
  refundId: string;
}

export interface Refund {
  id?: string;
  title: string;
  category: string;
  value: number;
  receipt?: Receipt;
}
