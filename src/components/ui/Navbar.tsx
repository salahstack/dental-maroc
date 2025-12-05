/**
 * Node modules
 */
import { useEffect, type FC } from 'react';
import { NavLink } from 'react-router-dom';
/**
 * Components
 */
import Button, { IconButton } from './Button';
import Logo from './Logo';
/**
 * Icons
 */
import { X } from 'lucide-react';

/**
 * Interfaces
 */
interface NavbarItemProps {
  label: string;
  link: string;
}
interface NavbarProps {
  navItems: NavbarItemProps[];
  isNavOpen: boolean;
  toggle: () => void;
  classes?: string;
}

const Navbar: FC<NavbarProps> = ({
  navItems,
  classes = '',
  isNavOpen,
  toggle,
}) => {
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isNavOpen]);
  return (
    <>
      <nav className={`navbar ${classes} ${isNavOpen && 'active'}`}>
        <div className='lg:hidden flex items-center justify-between mb-4 pb-4 border-b border-gray-200'>
          <Logo />
          <IconButton
            icon={<X />}
            variant='text'
            color='secondary'
            onClick={toggle}
          />
        </div>
        <ul className='navbar-list'>
          {navItems.map(({ label, link }, key) => {
            return (
              <li key={key}>
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  onClick={toggle}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
          <li className='xl:hidden'>
            <Button
              to='/auth/register'
              classes='mt-4'
            >
              Register
            </Button>
          </li>
          <li className='xl:hidden'>
            <Button to='/auth/login' variant='text' classes='mt-4'>Login</Button>
          </li>
        </ul>
      </nav>
      {isNavOpen && (
        <div className=' lg:hidden fixed inset-0 z-10 bg-black/50'></div>
      )}
    </>
  );
};

export default Navbar;
