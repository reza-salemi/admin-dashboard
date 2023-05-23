import { InputHTMLAttributes, ReactNode } from "react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
export interface FormInputProps<TFormValues extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<TFormValues>;
  placeholder: string;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  error?: Partial<DeepMap<TFormValues, FieldError>>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
