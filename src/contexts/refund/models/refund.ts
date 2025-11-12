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

export interface RefundDetail {
  refund: { data: Refund };
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
