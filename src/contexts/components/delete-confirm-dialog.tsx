import * as Dialog from "@radix-ui/react-dialog";
import Button from "../../components/button";
import Text from "../../components/text";

interface DeleteConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export default function DeleteConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
}: DeleteConfirmDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-100/80 data-[state=open]:animate-fadeIn" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gray-500 p-10 gap-6">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-gray-100 text-xl leading-5 font-bold">
              Excluir solicitação
            </Dialog.Title>
          </div>

          <Dialog.Description className="text-gray-200 text-sm leading-5 font-regular">
            Tem certeza de que deseja excluir essa solicitação? Essa ação é
            irreversível.
          </Dialog.Description>

          <div className="flex justify-end align-middle items-center gap-8 mt-5">
            <Dialog.Close asChild>
              <Text variant="text-semi-bold" className="cursor-pointer">
                Cancelar
              </Text>
            </Dialog.Close>

            <Button
              variant="primary"
              size="xs"
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={() => {
                onConfirm();
                onOpenChange(false);
              }}
            >
              Confirmar
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
