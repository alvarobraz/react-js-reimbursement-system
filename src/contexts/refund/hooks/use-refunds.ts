import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";
import type { RefundsResponse } from "../models/refund";
import {
  useQueryState,
  createSerializer,
  parseAsString,
  parseAsInteger,
} from "nuqs";

const toSearchParams = createSerializer({
  q: parseAsString,
  page: parseAsInteger,
});

export default function useRefunds() {
  const [q, setQ] = useQueryState("q");
  const [page, setPage] = useQueryState("page", { defaultValue: 1 });

  const { data, isLoading } = useQuery<RefundsResponse>({
    queryKey: ["refunds", q, page],
    queryFn: () => fetcher(`/refunds${toSearchParams({ q, page })}`),
  });

  return {
    refunds: data?.refunds?.data || [],
    meta: data?.refunds?.meta,
    isLoadingRefunds: isLoading,
    filters: {
      q,
      setQ,
      page,
      setPage,
    },
  };
}
