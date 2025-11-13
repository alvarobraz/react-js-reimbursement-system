import { z } from "zod";

export const refundNewFormSchema = z.object({
  title: z.string().min(1, { message: "Campo obrigatório" }).max(255),
  category: z.string().min(1, { message: "Campo obrigatório" }).max(255),
  value: z
    .union([z.string().min(1, { message: "Campo obrigatório" }), z.number()])
    .transform((val) =>
      typeof val === "string" ? Number(val.replace(",", ".")) * 100 : val
    ),
  file: z
    .instanceof(FileList)
    .refine((file) => file.length > 0, { message: "Campo obrigatório" })
    .optional(),
});

export type RefundNewFormSchema = z.infer<typeof refundNewFormSchema>;
