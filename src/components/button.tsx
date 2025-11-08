import React from "react";
import Text from "./text";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "flex items-center justify-center cursor-pointer transition rounded group gap-1",
  variants: {
    variant: {
      primary: "bg-green-100  hover:bg-green-200",
    },
    size: {
      sm: "h-12 w-88 py-1 px-3",
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
    size: "sm",
    disabled: false,
    handling: false,
  },
});

export const buttonTextVariants = tv({
  variants: {
    variant: {
      primary: "body-md-regular text-white",
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

export const buttonIconVariants = tv({
  variants: {
    variant: {
      primary: "fill-label-inverse",
    },
    size: {
      sm: "w-4 h-4",
      md: "w-6 h-6",
    },
    handling: {
      true: "w-4 h-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
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
