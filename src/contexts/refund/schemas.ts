import { z } from "zod";

export const refundNewFormSchema = z.object({
  title: z.string().min(1, { message: "Campo obrigatório" }).max(255),
  category: z.string().min(1, { message: "Campo obrigatório" }).max(255),
  value: z
    .number({
      required_error: "Campo obrigatório",
      invalid_type_error: "Valor inválido",
    })
    .min(1, { message: "Campo obrigatório" })
    .max(1_000_000_00, { message: "Valor muito alto" }),
  file: z
    .instanceof(FileList)
    .refine((file) => file.length > 0, { message: "Campo obrigatório" })
    .optional(),
});

export type RefundNewFormSchema = z.infer<typeof refundNewFormSchema>;
