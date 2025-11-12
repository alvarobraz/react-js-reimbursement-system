import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";
import type { Refund, RefundsResponse } from "../models/refund";

export default function useRefunds() {
  const { data, isLoading } = useQuery<RefundsResponse>({
    queryKey: ["refunds"],
    queryFn: () => fetcher("/refunds"),
  });

  return {
    refunds: data?.refunds?.data || [],
    meta: data?.refunds?.meta,
    isLoadingRefunds: isLoading,
  };
}
