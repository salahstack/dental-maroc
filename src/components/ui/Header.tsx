/**
 * Node modules
 */
import { Link } from 'react-router-dom';
import type { MouseEvent } from 'react';
import { useEffect, useRef } from 'react';
/**
 * Components
 */
import Image from './Image';
import Button from './Button';
/**
 * Icons
 */
import { Menu, ShoppingCart, X } from 'lucide-react';
/**
 * Custom hooks
 */
import { useToggle } from '../../hooks/useToggle';
import { useCart } from '../../hooks/useCart';

const Header = () => {
  const [isOpen, toggle] = useToggle();
  const { cart } = useCart();
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLLIElement | null>(null);

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + 'px';
    }
  };

  useEffect(initActiveBox, []);

  window.addEventListener('resize', initActiveBox);

  const activeCurrentLink = (event: MouseEvent<HTMLAnchorElement>) => {
    lastActiveLink.current?.classList.remove('active');
    const target = event.target as HTMLAnchorElement;
    target.classList.add('active');
    lastActiveLink.current = target;

    if (activeBox.current) {
      activeBox.current.style.top = target.offsetTop + 'px';
      activeBox.current.style.left = target.offsetLeft + 'px';
      activeBox.current.style.width = target.offsetWidth + 'px';
      activeBox.current.style.height = target.offsetHeight + 'px';
    }
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

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <header className='h-18 border-b border-gray-200 flex mb-8 md:mb-16'>
      <div className='container h-full flex items-center gap-4 justify-between'>
        <Link to='/accueil'>
          <Image
            srcSet='/images/logo.svg'
            fallback='/images/logo.svg'
            alt='logo'
            width='w-20'
            loading='eager'
            fetchPriority='high'
          />
        </Link>
        {/* Mobile Navigation */}
        <div className='relative grow flex justify-center'>
          <Button
            aria-label='open menu'
            classes='md:hidden w-10 h-10 p-0 ml-auto'
            onClick={toggle}
            icon={
              isOpen ? <X aria-hidden='true' /> : <Menu aria-hidden='true' />
            }
          />
          <nav className={`navbar ${isOpen ? 'active' : ''}`}>
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
              <li
                aria-hidden='true'
                className='active-box'
                ref={activeBox}
              ></li>
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
        <div className='flex items-center gap-2'>
          <nav className='items-center gap-2 hidden md:flex'>
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
          </nav>
          <div className='flex items-center gap-2'>
            <Button
              aria-label='open cart'
              classes='bg-transparent text-gray-700 w-10 h-10 p-0'
              icon={<ShoppingCart aria-hidden='true' />}
            />
            <span className='font-medium'>{totalPrice} DH</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
