import Container from "../components/container";
import InputText from "../components/input-text";
import Text from "../components/text";
import File from "../assets/icons/file.svg?react";
import { useParams } from "react-router";
import Icon from "../components/icon";
import Button from "../components/button";

export default function PageRefundDetails() {
  const { id } = useParams();

  return (
    <Container className="flex flex-col gap-6">
      <Text variant="heading-lg">Solicitação de reembolso </Text>
      <Text variant="body-md-regular">
        Dados da despesa para solicitar reembolso.
      </Text>
      <InputText label="Nome da solicitação" />
      <div className="flex justify-between align-middle w-[432px]">
        <InputText label="Categoria" className="relative z-50" />
        <InputText label="Valor" className="w-32" />
      </div>
      <div className="flex justify-center align-middle items-center gap-2 mt-1">
        <a
          href="https://www.linkedin.com/in/alvarobraz/?skipRedirect=true"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-100 hover:text-green-200 transition-colors no-underline"
        >
          <Icon svg={File} className="fill-green-100 h-5 w-5" />
          <Text variant="text-semi-bold">Abrir comprovante</Text>
        </a>
      </div>
      <Button>Excluir</Button>
    </Container>
  );
}
