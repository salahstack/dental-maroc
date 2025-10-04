import type { InputHTMLAttributes } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label: string;
  placeholder: string;
  name: string;
  classes?: string;
  fieldClasses?: string;
};
