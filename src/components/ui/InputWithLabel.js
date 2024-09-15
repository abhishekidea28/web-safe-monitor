"use client";

import { cn } from "@/Utilities/cn";
import { Label } from "./Label";
import Input from "./Input";

export function InputWithLabel({
  type,
  iconType,
  name,
  placeholder = "enter here",
  className,
  labelClass,
  inputClass,
  children,
  ...props
}) {
  return (
    <div className={cn("grid w-full max-w-sm items-center gap-1.5", className)}>
      <Label
        htmlFor={`label-${name}`}
        className={cn("text-sm text-black font-manrope font-medium -mb-1", labelClass)}
      >
        {name}
      </Label>
      <div className="flex items-center gap-2 border rounded-[8px] px-2 bg-white">
        {iconType === "pre" && <div>{children}</div>}
        <Input
          type={type}
          id={`label-${name}`}
          name={name}
          placeholder={placeholder}
          className={cn("outline-none border-none p-0 font-manrope bg-white h-10", inputClass)} // Adjusted height to h-10
          {...props}
        />
        {iconType === "post" && <div>{children}</div>}
      </div>
    </div>
  );
}
