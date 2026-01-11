'use client';

import {
  TextField as AriaTextField,
  FieldError,
  Input,
} from "react-aria-components";
import { Controller, FieldValues } from "react-hook-form";
import { TextFieldProps } from "./TextField.types";

const tempInputClass =
  "px-5 py-3 bg-[#fff] text-[#143334] w-full rounded-md mb-3 border border-gray-300";

export function TextField<T extends FieldValues = FieldValues>(props: TextFieldProps<T>) {
  const { type, name, placeholder, error, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <AriaTextField {...field} type={type} isInvalid={!!error}>
          <Input placeholder={placeholder} className={tempInputClass} />
          {error && (
            <FieldError className="text-red-600">{error.message}</FieldError>
          )}
        </AriaTextField>
      )}
    />
  );
}
