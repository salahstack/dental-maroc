/**
 * Node modules
 */
import type { FC } from 'react';
/**
 * Interfaces
 */
interface InfoCardProps {
  smallScreens: string;
  largeScreens: string;
  altSrc: string;
  title: string;
  description: string;
}

const InfoCard: FC<InfoCardProps> = ({ smallScreens, largeScreens, altSrc, title, description }) => {
  return (
    <div className='info-card'>
      <figure className={`img-box mx-auto w-fit rounded-lg`}>
        <picture className='h-full'>
          <source
            srcSet={smallScreens}
            type='image/webp'
            media='(max-width: 767px)'
          />
          <source
            srcSet={largeScreens}
            type='image/webp'
            media='(min-width: 768px)'
          />
          <img
            src={altSrc}
            alt=''
            className=''
            loading='lazy'
            width={96}
            height={96}
          />
        </picture>
      </figure>
      <h2 className='text-xl font-bold text-center my-3'>{title}</h2>
      <p className='text-gray-600 text-center text-sm'>{description}</p>
    </div>
  );
};

export default InfoCard;
