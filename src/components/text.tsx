import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// eslint-disable-next-line react-refresh/only-export-components
export const textVariants = tv({
  base: "font-sans text-white",
  variants: {
    variant: {
      "heading-lg": "text-gray-100 text-xl leading-5 font-bold",
      "body-md-regular": "text-gray-200 text-lg leading-5 font-regular",
      "text-label":
        "text-gray-200 text-[0.625rem] leading-5 font-regular uppercase",
      "title-bold": "text-gray-100 text-sm leading-[1.125rem] font-bold",
      "sub-title": "text-gray-200 text-xs leading-4 font-regular",
      "text-sm": "text-gray-200 text-sm leading-4 font-regular",
      "text-semi-bold":
        "text-green-100 text-sm leading-[1.125rem] font-semi-bold",
      "text-success": "text-green-100 text-xl leading-[1.125rem] font-bold",
    },
  },
  defaultVariants: {
    variant: "body-md-regular",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
}
