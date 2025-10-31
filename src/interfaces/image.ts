import type { ImgHTMLAttributes } from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  srcSet: string;
  fallback: string;
  alt: string;
  width?: number;
  height?: number;
  classes?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}