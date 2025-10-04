import type { HTMLAttributes } from "react";

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  type?: string;
  label: string;
  placeholder: string;
  name: string;
  classes?: string;
  fieldClasses?: string;
};
