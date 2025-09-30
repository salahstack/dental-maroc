/**
 * Node modules
 */
import type { FC } from "react";

/**
 * Interface
 */
import type { ImageProps } from "../../interfaces/image";

/**
 * Component
 */

const Image: FC<ImageProps> = ({ src, alt, width, height, classes }) => {
  return (
    <figure className={`img-box ${width} ${height} ${classes}`}>
      <img src={src} alt={alt} className="img-cover" loading="lazy" />
    </figure>
  );
};

export default Image;
