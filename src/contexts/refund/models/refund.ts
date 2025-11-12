import { Receipt } from "../../receipts/models/receipt";

export interface Refund {
  id?: string;
  title: string;
  category: string;
  value: number;
  receipt?: Receipt;
}

export interface RefundDetail {
  refund: Refund;
}

export interface RefundsResponse {
  refunds: {
    meta: {
      total: number;
      perPage: number;
      currentPage: number;
      lastPage: number;
      firstPage: number;
      firstPageUrl: string;
      lastPageUrl: string;
      nextPageUrl: string | null;
      previousPageUrl: string | null;
    };
    data: Refund[];
  };
}
