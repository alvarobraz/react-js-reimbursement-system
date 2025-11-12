import RefundList from "../components/refund-list";
import Container from "../components/container";
import Text from "../components/text";
import RefundSearch from "../components/refund-search";
import Divider from "../components/divider";
import ButtonIcon from "../components/button-icon";
import CaretLeft from "../assets/icons/caret-left.svg?react";
import CaretRight from "../assets/icons/caret-right.svg?react";
import useRefunds from "../contexts/refund/hooks/use-refunds";

export default function PageHome() {
  const { isLoadingRefunds, refunds } = useRefunds();

  console.log("refunds " + JSON.stringify(refunds));

  return (
    <Container className="flex flex-col gap-6">
      <Text variant="heading-lg">Solicitações</Text>
      <RefundSearch />
      <Divider />
      <RefundList refunds={refunds} loading={isLoadingRefunds} />
      <div className="flex justify-center items-center">
        <ButtonIcon size="sm" icon={CaretLeft} variant="primary" />
        <Text variant="body-md-regular" className="px-2">
          1/3
        </Text>
        <ButtonIcon size="sm" icon={CaretRight} variant="primary" />
      </div>
    </Container>
  );
}
