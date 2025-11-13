import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// eslint-disable-next-line react-refresh/only-export-components
export const textVariants = tv({
  base: "font-sans text-white",
  variants: {
    variant: {
      "ag-heading-lg": "text-gray-100 text-xl leading-3 font-bold",
      "ag-body-md-regular": "text-gray-200 text-sm leading-2 font-regular",
      "text-label":
        "text-gray-200 text-[0.625rem] leading-5 font-regular uppercase",
      "text-title": "text-gray-100 text-sm leading-[1.125rem] font-bold",
      "text-category": "text-gray-200 text-xs leading-4 font-regular",
      "ag-body-sm": "text-gray-200 text-sm leading-4 font-regular",
      "text-semi-bold":
        "text-green-100 text-sm leading-[1.125rem] font-semi-bold",
      "text-success": "text-green-100 text-xl leading-[1.125rem] font-bold",
      "text-error":
        "text-red-500 text-[0.625rem] leading-5 font-regular uppercase",
    },
  },
  defaultVariants: {
    variant: "ag-body-md-regular",
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
