import React from "react";
import Text from "./text";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "flex items-center justify-center cursor-pointer transition rounded-lg group gap-1",
  variants: {
    variant: {
      primary: "bg-green-100  hover:bg-green-200",
    },
    size: {
      sm: "h-12 w-38 py-1 px-3",
      md: "h-12 w-full py-1 px-3",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
    handling: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
    handling: false,
  },
});

export const buttonTextVariants = tv({
  variants: {
    variant: {
      primary: "font-bold text-white",
    },
    size: {
      sm: "text-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  handling?: boolean;
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  handling,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({
        variant,
        size,
        disabled,
        handling,
      })}
      disabled={disabled as boolean}
      {...props}
    >
      <Text
        variant="body-md-regular"
        className={buttonTextVariants({ variant, size })}
      >
        {children}
      </Text>
    </button>
  );
}
