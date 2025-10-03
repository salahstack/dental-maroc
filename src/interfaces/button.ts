/**
 * Node modules
 */
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string,
  target?: string,
  label?: string,
  icon?: ReactNode,
  classes?: string,
  state?: object,
  children?: ReactNode
}