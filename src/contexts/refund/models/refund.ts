export interface Receipt {
  originalFilename: string;
  filename: string;
  path: string;
  extname: string;
  refundId: string;
}

export interface Refund {
  title: string;
  category: string;
  value: number;
  receipt: Receipt;
}
