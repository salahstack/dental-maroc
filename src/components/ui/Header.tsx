/**
 * Node modules
 */
import { Link, NavLink } from 'react-router-dom';
/**
 * Components
 */
import Image from './Image';
import { IconButton } from './Button';
import Cart from '../../pages/Cart';
/**
 * Icons
 */
import { Heart, Menu, ShoppingCart, X } from 'lucide-react';
/**
 * Custom hooks
 */
import { useToggle } from '../../hooks/useToggle';
import { useCart } from '../../hooks/useCart';
import { useFavorite } from '../../hooks/useFavorite';

const Header = () => {
  const [isOpen, toggle] = useToggle();
  const [isCartOpen, toggleCart, closeCart] = useToggle();
  const { cart } = useCart();
  const { favorites } = useFavorite();


  const navItems = [
    {
      label: 'Accueil',
      link: 'accueil',
    },
    {
      label: 'Boutique',
      link: 'boutique',
    },
    {
      label: 'À propos',
      link: 'a-propos',
    },
    {
      label: 'Contact',
      link: 'contact',
    },
    {
      label: 'Favoris',
      link: 'favoris',
    },
  ];

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartItems = cart.reduce((count, item) => count + item.quantity, 0);

  const favoriteItems = favorites.length;

  return (
    <header className='h-18 border-b border-gray-200 fixed top-0 left-0 w-full flex bg-white z-40'>
      <div className='container h-full flex items-center gap-4 lg:justify-between relative'>
        <Link to='/accueil' className='active:scale-100'>
          <Image
            srcSet='/images/logo.svg'
            fallback='/images/logo.svg'
            classes='w-20'
            alt='logo'
            width={80}
            height={80}
            loading='eager'
          />
        </Link>
        {/* Mobile Navigation */}
        <div className='relative lg:grow flex justify-center max-lg:order-3'>
          <IconButton
            aria-label='open menu'
            classes='lg:hidden ml-auto'
            variant='text'
            color='secondary'
            onClick={toggle}
            icon={
              isOpen ? <X aria-hidden='true' /> : <Menu aria-hidden='true' />
            }
          />
          <nav className={`navbar ${isOpen ? 'active' : ''}`}>
            <ul className='flex flex-col lg:flex-row lg:items-center'>
              {navItems.map(({ label, link }, key) => {
                return (
                  <li key={key}>
                    <NavLink
                      to={link}
                      className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <div className='mt-2 lg:hidden'>
              <Link
                to='/se-connecter'
                className='nav-link'
              >
                Se connecter
              </Link>
              <Link
                to='/s-inscrire'
                className='nav-link'
              >
                S'inscrire
              </Link>
            </div>
          </nav>
        </div>
        <div className='flex items-center gap-2 max-lg:ml-auto'>
          <nav className='items-center gap-2 hidden lg:flex'>
            <Link
              to='/se-connecter'
              className='nav-link'
            >
              Se connecter
            </Link>
            <Link
              to='/s-inscrire'
              className='nav-link'
            >
              S'inscrire
            </Link>
          </nav>
          <div className='flex items-center gap-2 relative'>
            <IconButton
              aria-label='open cart'
              classes='relative'
              variant='text'
              color='secondary'
              icon={<ShoppingCart aria-hidden='true' />}
              onClick={toggleCart}
            >
              {cartItems > 0 && (
                <span className='absolute w-6 h-6 bg-blue-600 text-white text-sm rounded-full flex items-center justify-center -top-1/2 translate-y-1/2 left-1/2'>
                  {cartItems}
                </span>
              )}
            </IconButton>
            <span className='font-medium whitespace-nowrap'>{totalPrice} DH</span>
          </div>
          <IconButton
            to='/favoris'
            icon={<Heart aria-hidden='true' />}
            classes='relative hidden lg:flex'
            variant='text'
            color='secondary'
            aria-label='favoris'
          >
            {favoriteItems > 0 && (
              <span className='absolute w-6 h-6 bg-blue-600 text-white text-sm rounded-full flex items-center justify-center -top-1/2 translate-y-1/2 left-1/2'>
                {favoriteItems}
              </span>
            )}
          </IconButton>
        </div>
        <Cart
          isOpen={isCartOpen}
          onClose={closeCart}
        />
      </div>
    </header>
  );
};

export default Header;
