import { tv, type VariantProps } from "tailwind-variants";
import Text from "./text";
import type { ComponentProps, ReactNode } from "react";
import Skeleton from "./skeleton";

export const inputTextContainerVariants = tv({
  base: "flex flex-col gap-1 group",
});

export const inputTextWrapperVariants = tv({
  base: `
    border border-solid border-gray-300
    rounded-md flex items-center gap-3
    focus-within:border-green-100 focus-within:bg-transparent
  `,

  variants: {
    size: {
      xs: "w-[17.375rem] h-12 p-4",
      md: "w-full h-12 p-4",
    },

    disabled: {
      true: "pointer-events-none opacity-60",
    },
  },

  defaultVariants: {
    size: "md",
    disabled: false,
  },
});

export const inputTextVariants = tv({
  base: `
    bg-transparent outline-none placeholder:text-placeholder
    text-accent-paragraph flex-1
  `,
});

interface InputTextProps
  extends VariantProps<typeof inputTextWrapperVariants>,
    Omit<ComponentProps<"input">, "size" | "disabled"> {
  label?: ReactNode;
  error?: ReactNode;
  loading?: boolean;
}

export default function InputText({
  size,
  disabled,
  className,
  label,
  error,
  loading,
  ...props
}: InputTextProps) {
  return (
    <div className={inputTextContainerVariants({ className })}>
      {label && (
        <Text
          variant="text-label"
          className="text-accent-title group-focus-within:text-green-100 transition-colors"
        >
          {label}
        </Text>
      )}

      {!loading ? (
        <div className={inputTextWrapperVariants({ size, disabled })}>
          <input
            className={inputTextVariants()}
            disabled={disabled as boolean}
            {...props}
          />
        </div>
      ) : (
        <Skeleton className="bg-gray-300 w-full h-12 p-4" />
      )}

      {error && (
        <Text variant="text-label" className="text-accent-red">
          {error}
        </Text>
      )}
    </div>
  );
}
