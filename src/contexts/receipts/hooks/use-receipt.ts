import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";
import { Receipt } from "../models/receipt";

export default function useReceipt(id?: string) {
  const { data, isLoading } = useQuery<Receipt>({
    queryKey: ["receipt", id],
    queryFn: () => fetcher(`/receipts/download/${id}`),
    enabled: !!id,
  });

  return {
    receipt: data,
    isLoadingReceipt: isLoading,
  };
}
