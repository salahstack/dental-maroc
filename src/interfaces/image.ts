import type { ImgHTMLAttributes } from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  srcSet: string;        // WebP or responsive sources
  fallback: string;      // PNG/JPG fallback
  alt: string;
  width?: string;
  height?: string;
  classes?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}