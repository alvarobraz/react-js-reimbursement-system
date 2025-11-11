import { useParams } from "react-router";
import Text from "../components/text";

export default function PageRefundRequests() {
  const { id } = useParams();

  return (
    <>
      <Text variant="title-bold">Página detalhe do reembolso</Text>
      <hr />
      <Text variant="title-bold">ID do reembolso: {id}</Text>
    </>
  );
}
