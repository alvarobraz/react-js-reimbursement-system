import { useId, useState } from "react";
import Container from "../components/container";
import InputText from "../components/input-text";
import Text from "../components/text";
import File from "../assets/icons/file.svg?react";
import CaretUp from "../assets/icons/caret-up.svg?react";
import CaretDown from "../assets/icons/caret-down.svg?react";
import CheckedSuccess from "../assets/images/checked-success.svg?react";
import { useParams } from "react-router";
import Icon from "../components/icon";
import Button from "../components/button";
import InputSingleFile from "../components/input-single-file";
import { useForm } from "react-hook-form";
import DeleteConfirmDialog from "../contexts/componets/delete-confirm-dialog";
import useRefund from "../contexts/refund/hooks/use-refund";
import useReceipt from "../contexts/receipts/hooks/use-receipt";
import { categories, getRefundCategoryData } from "../helpers/refund-utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../components/select";
import { SelectTrigger } from "@radix-ui/react-select";

export default function PageRefund() {
  const { id } = useParams();

  const { isLoadingRefund, refund } = useRefund(id);
  const { receipt } = useReceipt(refund?.receipt?.id);

  // form
  const form = useForm({
    defaultValues: {
      file: undefined,
    },
  });

  const fileSrc = receipt
    ? `${import.meta.env.VITE_API_URL}${receipt?.url}`
    : undefined;

  // select
  const { category } = getRefundCategoryData(refund?.category || "");
  const [openSelect, setOpenSelect] = useState(false);
  const [valueSelect, setValueSelect] = useState(category || "");
  const selectId = useId();

  // delete confirm dialog
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
          <InputText
            label="Nome da solicitação"
            defaultValue={refund?.title || ""}
          />
          <div className="flex justify-between align-middle w-[432px]">
            <div>
              <Text
                variant="text-label"
                className="text-accent-title group-focus-within:text-green-100 transition-colors"
              >
                Categoria
              </Text>

              <Select
                onOpenChange={(isOpen) => setOpenSelect(isOpen)}
                value={valueSelect}
                onValueChange={setValueSelect}
              >
                <SelectTrigger
                  id={selectId}
                  className={`
                    w-70 h-12 border border-solid rounded-lg pl-4 pr-3 flex items-center justify-between pt-1 text-gray-100
                    transition-colors
                    ${openSelect ? "border-green-100" : "border-gray-300"}
                    focus:outline-none
                  `}
                >
                  <SelectValue placeholder="Selecione" />
                  {openSelect ? (
                    <Icon
                      svg={CaretUp}
                      className="fill-green-100 size-8 mr-[-8px] pr-3"
                    />
                  ) : (
                    <Icon
                      svg={CaretDown}
                      className="fill-gray-300 size-8 mr-[-8px] pr-3"
                    />
                  )}
                </SelectTrigger>

                <SelectContent
                  className="bg-white w-[var(--radix-select-trigger-width)] ![margin-left:0] border border-solid border-gray-300 rounded-md text-gray-100"
                  align="start"
                >
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <InputText
              label="Valor"
              className="w-32"
              defaultValue={
                refund ? (refund.value / 100).toFixed(2).replace(".", ",") : ""
              }
            />
          </div>
          {id !== undefined ? (
            <>
              <div className="flex justify-center align-middle items-center gap-2 mt-1">
                <a
                  href={`${import.meta.env.VITE_API_URL}${receipt?.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-100 hover:text-green-200 transition-colors no-underline"
                >
                  <Icon svg={File} className="fill-green-100 h-5 w-5" />
                  <Text variant="text-semi-bold">Abrir comprovante</Text>
                </a>
              </div>
            </>
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
