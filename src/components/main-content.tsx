import { type VariantProps, tv } from "tailwind-variants";
import React from "react";

export const mainContentVariants = tv({
  base: "mx-auto",
  variants: {
    size: {
      md: "w-[67.625rem] m-10 py-10 bg-white gap-6 rounded-xl",
      sm: "w-[32rem] m-10 py-10 bg-white gap-6 rounded-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface MainContentProps
  extends VariantProps<typeof mainContentVariants>,
    React.ComponentProps<"main"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function MainContent({
  as = "main",
  children,
  className,
  size,
  ...props
}: MainContentProps) {
  return React.createElement(
    as,
    {
      className: mainContentVariants({ size, className }),
      ...props,
    },
    children
  );
}
