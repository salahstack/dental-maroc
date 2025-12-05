/**
 * Node modules
 */
import { Link } from 'react-router-dom';
import type { FC } from 'react';
/**
 * Components
 */
import Image from './Image';

/**
 * Interfaces
 */
interface LogoProps {
  classes?: string;
}

const Logo: FC<LogoProps> = ({ classes = '' }) => {
  return (
    <Link
      to='/accueil'
      className={`active:scale-100 flex items-center gap-1 ${classes}`}
    >
      <Image
        srcSet='/images/logo.svg'
        fallback='/images/logo.svg'
        alt='logo'
        width={64}
        height={64}
        loading='eager'
        classes='shrink-0'
      />
      <h1 className='text-blue-600 text-xl font-bold'>Dentora</h1>
    </Link>
  );
};

export default Logo;
