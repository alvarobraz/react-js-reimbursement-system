import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";
import type { RefundsResponse } from "../models/refund";
import { useQueryState, createSerializer, parseAsString } from "nuqs";

const toSearchParams = createSerializer({
  albumId: parseAsString,
  q: parseAsString,
});

export default function useRefunds() {
  const [q, setQ] = useQueryState("q");

  const { data, isLoading } = useQuery<RefundsResponse>({
    queryKey: ["refunds", q],
    queryFn: () => fetcher(`/refunds${toSearchParams({ q })}`),
  });

  return {
    refunds: data?.refunds?.data || [],
    meta: data?.refunds?.meta,
    isLoadingRefunds: isLoading,
    filters: {
      q,
      setQ,
    },
  };
}
