import RefundList from "../components/refund-list";
import Container from "../components/container";
import Text from "../components/text";
import RefundSearch from "../components/refund-search";
import Divider from "../components/divider";

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
            id: "f542b8d6-9534-4ffe-9f45-f951afdd9912",
            title: "Álvaro Braz",
            category: "hosting",
            value: 120000,
          },
          {
            id: "f542b8d6-9534-4ffe-9f45-f951afdd9912",
            title: "Álvaro Braz",
            category: "transport",
            value: 45000,
          },
          {
            id: "f542b8d6-9534-4ffe-9f45-f951afdd9912",
            title: "Álvaro Braz",
            category: "services",
            value: 34725,
          },
          {
            id: "f542b8d6-9534-4ffe-9f45-f951afdd9912",
            title: "Álvaro Braz",
            category: "others",
            value: 5000,
          },
        ]}
      />
    </Container>
  );
}
