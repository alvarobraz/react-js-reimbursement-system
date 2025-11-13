import type { Refund } from "../contexts/refund/models/refund";
import RefundRow from "./refund-row";
import Text from "../components/text";
import { Link } from "react-router";

interface refundListProps {
  refunds: Refund[];
  loading?: boolean;
}

export default function RefundList({ refunds, loading }: refundListProps) {
  return (
    <>
      {!loading && refunds.length > 0 && (
        <div className="flex flex-col gap-6">
          {refunds.map((refund) => (
            <Link to={`refund-request/${refund.id}`}>
              <RefundRow
                key={refund.id}
                refund={{
                  title: refund.title,
                  category: refund.category,
                  value: refund.value,
                }}
              />
            </Link>
          ))}
        </div>
      )}
      {loading && (
        <div className="flex flex-col gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <RefundRow
              key={`refund-loading-${index}`}
              loading
              refund={{} as Refund}
            />
          ))}
        </div>
      )}
      {!loading && refunds.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <Text variant="ag-heading-lg">Nenhuma foto encontrada</Text>
        </div>
      )}
    </>
  );
}
