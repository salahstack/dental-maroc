/**
 * Node modules
 */
import type { FC } from 'react';

/**
 * Interface
 */
import type { ImageProps } from '../../interfaces/image';

/**
 * Component
 */

const Image: FC<ImageProps> = ({
  srcSet,
  fallback,
  alt,
  width = '',
  sizes = '',
  height = '',
  classes = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  ...rest
}) => {
  return (
    <figure className={`img-box ${width} ${height} ${classes}`}>
      <picture className='h-full'>
        <source
          srcSet={srcSet}
          type='image/webp'
          sizes={sizes}
        />
        <img
          src={fallback}
          alt={alt}
          className='img-cover'
          loading={loading}
          {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
          {...rest}
          decoding='async'
        />
      </picture>
    </figure>
  );
};

export default Image;
