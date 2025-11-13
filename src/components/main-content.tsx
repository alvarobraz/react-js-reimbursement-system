import { type VariantProps, tv } from "tailwind-variants";
import React from "react";

export const mainContentVariants = tv({
  base: "mx-auto m-10 py-10 bg-white gap-6 rounded-xl",
  variants: {
    size: {
      md: `
        w-full
        sm:w-[40rem]
        md:w-[67.625rem]
      `,
      sm: `
        w-full
        sm:w-[28rem]
        md:w-[32rem]
      `,
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
