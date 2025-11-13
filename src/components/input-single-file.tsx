import { tv, type VariantProps } from "tailwind-variants";
import Icon from "./icon";
import Text, { textVariants } from "./text";
// import FileImageIcon from "../assets/icons/image.svg?react";
import CloudArrowUp from "../assets/icons/cloud-arrow-up.svg?react";
import { useWatch } from "react-hook-form";
import React, { ReactNode } from "react";
import Skeleton from "./skeleton";

export const inputSingleFileVariants = tv({
  base: `
    flex items-center justify-between w-full
    group-hover:border-border-active
    rounded-lg gap-1 transition
    border border-solid border-gray-300
    rounded-md flex items-center gap-3
    focus-within:border-green-100 focus-within:bg-transparent text-gray-200
  `,
  variants: {
    size: {
      md: "p-0",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const inputSingleFileIconVariants = tv({
  base: "fill-placeholder fill-white",
  variants: {
    size: {
      md: "w-8 h-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputSingleFileProps
  extends VariantProps<typeof inputSingleFileVariants>,
    Omit<React.ComponentProps<"input">, "size"> {
  error?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  allowedExtensions: string[];
  maxFileSizeInMB: number;
  label?: ReactNode;
  loading?: boolean;
}

export default function InputSingleFile({
  size,
  error,
  form,
  allowedExtensions,
  maxFileSizeInMB,
  label,
  loading,
  ...props
}: InputSingleFileProps) {
  const formValues = useWatch({ control: form.control });
  const name = props.name || "";
  const formFile: File = React.useMemo(
    () => formValues[name]?.[0],
    [formValues, name]
  );

  const { fileExtension, fileSize } = React.useMemo(
    () => ({
      fileExtension: formFile?.name?.split(".")?.pop()?.toLowerCase() || "",
      fileSize: formFile?.size || 0,
    }),
    [formFile]
  );

  function isValidExtension() {
    return allowedExtensions.includes(fileExtension);
  }

  function isValidSize() {
    return fileSize <= maxFileSizeInMB * 1024 * 1024;
  }

  function isValidFile() {
    return isValidExtension() && isValidSize();
  }

  return (
    <div>
      {!formFile || !isValidFile() ? (
        <>
          {label && (
            <Text
              variant="text-label"
              className="text-accent-title group-focus-within:text-green-100 transition-colors"
            >
              {label}
            </Text>
          )}

          <div className="w-full relative group cursor-pointer">
            {!loading ? (
              <>
                <input
                  type="file"
                  className="absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => {
                    const files = e.target.files;
                    form.setValue(name, files);
                  }}
                  {...props}
                />
                <div className={inputSingleFileVariants({ size })}>
                  <Text
                    variant="body-md-regular"
                    className="text-placeholder text-center p-4"
                  >
                    Nome do arquivo.pdf
                  </Text>
                  <div className="bg-green-100 w-14 h-13 flex items-center justify-center rounded-lg">
                    <Icon
                      svg={CloudArrowUp}
                      className={inputSingleFileIconVariants({ size })}
                    />
                  </div>
                </div>
              </>
            ) : (
              <Skeleton className="bg-gray-300 w-full h-13 flex items-center justify-center rounded-lg" />
            )}
          </div>
          <div className="flex flex-col gap-1 mt-1">
            {formFile && !isValidExtension() && (
              <Text variant="text-label" className="text-accent-red">
                Tipo de arquivo inválido
              </Text>
            )}
            {formFile && !isValidSize() && (
              <Text variant="text-label" className="text-accent-red">
                Tamanho do arquivo ultrapassa o máximo
              </Text>
            )}
            {error && (
              <Text variant="text-label" className="text-accent-red">
                {error}
              </Text>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-3 items-center border border-solid border-border-primary mt-5 p-3 rounded">
            <div className="w-full flex justify-between">
              <div className="truncate max-w-80">
                <Text variant="sub-title" className="text-placeholder">
                  {formFile.name}
                </Text>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className={textVariants({
                    variant: "text-label",
                    className: "text-accent-red cursor-pointer hover:underline",
                  })}
                  onClick={() => {
                    form.setValue(name, undefined);
                  }}
                >
                  Remover
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
