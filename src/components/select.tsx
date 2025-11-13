import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import ChevronDownIcon from "../assets/icons/caret-down.svg?react";
import type React from "react";
import cn from "classnames";
import Text from "./text";
import ButtonIcon from "./button-icon";

export const Select = SelectPrimitive.Root;
export const s = SelectPrimitive.Trigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = SelectPrimitive.Icon;

export function SelectContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          `
        `,
          className
        )}
        position="popper"
        sideOffset={4}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        `
        relative flex cursor-pointer select-none items-center
        rounded-sm px-3 py-2 text-sm outline-none
        transition-colors
        data-highlighted:bg-background-secondary
        data-[state=checked]:font-bold
        ata-disabled:pointer-events-none
        data-disabled:opacity-50
      `,
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute right-3">
        <CheckIcon className="h-5 w-5 text-green-100" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(
        "flex h-6 cursor-default items-center justify-center bg-background-primary",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="h-5 w-5" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(
        "flex h-6 cursor-default items-center justify-center bg-background-primary",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="h-5 w-5" />
    </SelectPrimitive.ScrollDownButton>
  );
}
