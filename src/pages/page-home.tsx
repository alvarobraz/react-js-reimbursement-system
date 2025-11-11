import RefundList from "../components/refund-list";
import Container from "../components/container";
import Text from "../components/text";
import RefundSearch from "../components/refund-search";
import Divider from "../components/divider";
import ButtonIcon from "../components/button-icon";
import CaretLeft from "../assets/icons/caret-left.svg?react";
import CaretRight from "../assets/icons/caret-right.svg?react";

export default function PageHome() {
  return (
    <Container className="flex flex-col gap-6">
      <Text variant="heading-lg">Solicitações</Text>
      <RefundSearch />
      <Divider />
      <RefundList
        refunds={[
          {
            id: "f542b8d6-9534-4ffe-9f45-f951afdd9912",
            title: "Álvaro Braz",
            category: "food",
            value: 50050,
          },
          {
            id: "f542b8d6-9534-4ffe-9f45-f951afdd9913",
            title: "Álvaro Braz",
            category: "hosting",
            value: 120000,
          },
          {
            id: "f542b8d6-9534-4ffe-9f45-f951afdd9914",
            title: "Álvaro Braz",
            category: "transport",
            value: 45000,
          },
          {
            id: "f542b8d6-9534-4ffe-9f45-f951afdd9915",
            title: "Álvaro Braz",
            category: "services",
            value: 34725,
          },
          {
            id: "f542b8d6-9534-4ffe-9f45-f951afdd9916",
            title: "Álvaro Braz",
            category: "others",
            value: 5000,
          },
        ]}
      />
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
