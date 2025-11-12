import { useQuery } from "@tanstack/react-query";
import { api, fetcher } from "../../../helpers/api";
import type { RefundDetail } from "../models/refund";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export default function useRefund(id?: string) {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<RefundDetail>({
    queryKey: ["refund", id],
    queryFn: () => fetcher(`/refunds/${id}`),
    enabled: !!id,
  });

  async function deleteRefund(refundId: string) {
    try {
      await api.delete(`/refunds/${refundId}`);

      toast.success("Solicitação de reembolso excluída com sucesso");

      navigate("/");
    } catch (error) {
      toast.error("Erro ao excluir solicitação de reembolso");
      throw error;
    }
  }

  return {
    refund: data?.refund,
    isLoadingRefund: isLoading,
    deleteRefund,
  };
}
