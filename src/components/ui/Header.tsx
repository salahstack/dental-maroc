/**
 * Components
 */
import Button, { IconButton } from './Button';
import Logo from './Logo';
import Navbar from './Navbar';
import SearchView from './SearchView';
/**
 * Icons
 */
import { Heart, Menu, Search, ShoppingCart } from 'lucide-react';
/**
 * Custom hooks
 */
import useCartState from '../../hooks/cart/useCartState';
import useFavoritesState from '../../hooks/favorites/useFavoritesState';
import { useToggle } from '../../hooks/useToggle';

const Header = () => {
  const cart = useCartState();
  const favorites = useFavoritesState();
  const [isNavOpen, toggle] = useToggle();
  const [isSearchBarOpen, toggleSearchBar] = useToggle();

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
  ];

  const cartItems = cart.reduce((count, item) => count + item.quantity, 0);

  const favoriteItems = favorites.length;
  return (
    <header className='h-18 border-b border-gray-200 fixed top-0 left-0 w-full flex bg-white z-40'>
      <div className='container h-full flex justify-between xl:grid xl:grid-cols-[1fr_4fr_1fr_1fr] xl:grid-rows-1 xl:justify-normal items-center gap-4'>
        <Logo />
        <Navbar
          navItems={navItems}
          isNavOpen={isNavOpen}
          toggle={toggle}
        />
        {/* <IconButton
          icon={<Search size={20} />}
          classes='xl:hidden ml-auto xl:ml-auto'
          variant='text'
          size='sm'
          color='secondary'
          aria-label='open search bar'
          onClick={toggleSearchBar}
        /> */}
        <SearchView
          isSearchBarOpen={isSearchBarOpen}
          onToggle={toggleSearchBar}
        />
        <div className='flex items-center gap-2 max-xl:justify-self-end'>
          {/* Header Actions */}
          <IconButton
            icon={<Search size={20} />}
            classes='xl:hidden'
            variant='text'
            size='sm'
            color='secondary'
            aria-label='open search bar'
            onClick={toggleSearchBar}
          />
          <IconButton
            aria-label='cart'
            classes='relative'
            variant='text'
            color='secondary'
            size='sm'
            to='/cart'
            icon={
              <ShoppingCart
                aria-hidden='true'
                size='20'
              />
            }
          >
            {cartItems > 0 && (
              <span className='absolute text-xs w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center -top-1/2 translate-y-1/2 left-1/2'>
                {cartItems}
              </span>
            )}
          </IconButton>
          <IconButton
            to='/favorites'
            icon={
              <Heart
                aria-hidden='true'
                size='20'
              />
            }
            classes='relative hidden lg:flex'
            variant='text'
            size='sm'
            color='secondary'
            aria-label='favorites'
          >
            {favoriteItems > 0 && (
              <span className='absolute w-6 h-6 bg-blue-600 text-white text-sm rounded-full flex items-center justify-center -top-1/2 translate-y-1/2 left-1/2'>
                {favoriteItems}
              </span>
            )}
          </IconButton>
          <Button
            to='/auth/login'
            classes='max-lg:hidden px-6 rounded-3xl'
          >
            Login
          </Button>
          <IconButton
            onClick={toggle}
            icon={<Menu />}
            classes='rounded-xl lg:hidden'
            variant='text'
            color='secondary'
            aria-label='open sidebar'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
