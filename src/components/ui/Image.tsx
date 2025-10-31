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
    <figure className={`img-box ${classes}`}>
      <picture className='h-full'>
        <source
          srcSet={srcSet}
          type='image/webp'
          sizes={sizes}
        />
        <img
          src={fallback}
          alt={alt}
          width={width}
          height={height}
          className='img-cover'
          loading={loading}
          {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
          {...rest}
          decoding='async'
        />
      </picture>
      <noscript>
        <img
          src={fallback}
          alt={alt}
          width={width}
          height={height}
          className='img-cover'
          loading={loading}
          {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
          {...rest}
          decoding='async'
        />
      </noscript>
    </figure>
  );
};

export default Image;
