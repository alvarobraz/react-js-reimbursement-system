import Container from "../components/container";
import InputText from "../components/input-text";
import Text from "../components/text";
import File from "../assets/icons/file.svg?react";
import CheckedSuccess from "../assets/images/checked-success.svg?react";
import { useParams } from "react-router";
import Icon from "../components/icon";
import Button from "../components/button";
import InputSingleFile from "../components/input-single-file";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DeleteConfirmDialog from "../contexts/componets/delete-confirm-dialog";
import useRefund from "../contexts/refund/hooks/use-refund";

export default function PageRefund() {
  const { id } = useParams();
  const { isLoadingRefund, refund } = useRefund(id);

  console.log("refund =>" + JSON.stringify(refund));

  const form = useForm({
    defaultValues: {
      file: undefined,
    },
  });

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);

  const handleDelete = () => {
    console.log("Item excluído!");
  };

  return (
    <Container
      className={
        success && id === undefined
          ? "flex flex-col items-center align-middle gap-6"
          : "flex flex-col gap-6"
      }
    >
      {success && id === undefined ? (
        <>
          <Text variant="text-success">Solicitação enviada!</Text>
          <CheckedSuccess />
          <Text variant="sub-title">
            Agora é apenas aguardar! Sua solicitação será analisada e, em breve,
            o setor financeiro irá entrar em contato com você.
          </Text>
        </>
      ) : (
        <>
          <Text variant="heading-lg">Solicitação de reembolso </Text>
          <Text variant="body-md-regular">
            Dados da despesa para solicitar reembolso.
          </Text>
          <InputText label="Nome da solicitação" value={refund?.title || ""} />
          <div className="flex justify-between align-middle w-[432px]">
            <InputText label="Categoria" value={refund?.category || ""} />
            <InputText
              label="Valor"
              className="w-32"
              value={
                refund ? (refund.value / 100).toFixed(2).replace(".", ",") : ""
              }
            />
          </div>
          {id !== undefined ? (
            <div className="flex justify-center align-middle items-center gap-2 mt-1">
              <a
                href={`${import.meta.env.VITE_API_URL}/${
                  refund?.receipt?.path
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-100 hover:text-green-200 transition-colors no-underline"
              >
                <Icon svg={File} className="fill-green-100 h-5 w-5" />
                <Text variant="text-semi-bold">Abrir comprovante</Text>
              </a>
            </div>
          ) : (
            <InputSingleFile
              form={form}
              label="Comprovante"
              allowedExtensions={["pdf"]}
              maxFileSizeInMB={50}
              error={form.formState.errors.file?.message}
              {...form.register("file")}
            />
          )}
        </>
      )}

      {id !== undefined ? (
        <Button onClick={() => setOpen(true)}>Excluir</Button>
      ) : (
        <Button onClick={() => setSuccess(false)}>Nova solicitação</Button>
      )}

      <DeleteConfirmDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={handleDelete}
      />
    </Container>
  );
}
