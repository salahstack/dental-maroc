/**
 * Node modules
 */
import { Outlet } from 'react-router-dom';
/**
 * Components
 */
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

const Layout = () => {
  return (
    <div className='flex flex-col justify-between min-h-dvh'>
      <Header />
      <main>
        <article>
          <Outlet />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
