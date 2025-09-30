/**
 * Node modules
 */
import { Link } from 'react-router-dom';
import type { MouseEvent } from 'react';
/**
 * Components
 */
import Image from './Image';
import Button from './Button';
/**
 * Icons
 */
import { Menu } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Header = () => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  };

  useEffect(initActiveBox, []);

  window.addEventListener('resize', initActiveBox);

  const activeCurrentLink = (event: MouseEvent<HTMLAnchorElement>) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
  };

  const navItems = [
    {
      label: 'Accueil',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink,
    },
    {
      label: 'Shop',
      link: '#shop',
      className: 'nav-link',
    },
    {
      label: 'À propos',
      link: '#about',
      className: 'nav-link',
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link',
    },
  ];
  return (
    <header className='h-18 border-b border-gray-200 flex mb-8 md:mb-16'>
      <div className='container h-full flex items-center justify-between'>
        <Link
          to='/accueil'
        >
          <Image
            src='/images/logo.png'
            alt='logo'
            width='w-20'
          />
        </Link>
        {/* Mobile Navigation */}
        <div className='relative'>
          <Button
            classes='md:hidden'
            icon={<Menu />}
          />
          <nav className='navbar'>
            <ul className='flex flex-col md:flex-row md:items-center'>
              {navItems.map(({ label, link, className, ref }, key) => {
                return (
                  <li key={key}>
                    <a
                      href={link}
                      className={className}
                      onClick={activeCurrentLink}
                      ref={ref}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
              <div
                className='active-box'
                ref={activeBox}
              ></div>
            </ul>
            <div className='mt-2 md:hidden'>
              <Link
                to='/login'
                className='nav-link'
              >
                Se connecter
              </Link>
              <Link
                to='/register'
                className='nav-link'
              >
                S'inscrire
              </Link>
            </div>
          </nav>
        </div>
        <div className='items-center gap-2 hidden md:flex'>
          <Link
            to='/login'
            className='nav-link'
          >
            Se connecter
          </Link>
          <Link
            to='/register'
            className='nav-link'
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
