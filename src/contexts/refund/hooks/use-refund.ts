import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";
import type { RefundDetail } from "../models/refund";

export default function useRefund(id?: string) {
  const { data, isLoading } = useQuery<RefundDetail>({
    queryKey: ["refund", id],
    queryFn: () => fetcher(`/refunds/${id}`),
    enabled: !!id,
  });

  return {
    refund: data?.refund,
    isLoadingRefund: isLoading,
  };
}
