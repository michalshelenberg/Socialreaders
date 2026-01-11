import { TextFieldProps as AriaTextFieldProps } from "react-aria-components";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

export type TextFieldProps<T extends FieldValues = FieldValues> = AriaTextFieldProps & {
  control: Control<T>;
  name: Path<T>;
  error?: FieldError;
  placeholder: string;
};
