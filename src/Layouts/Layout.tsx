/**
 * Node modules
 */
import { Outlet } from 'react-router-dom';
/**
 * Components
 */
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
/**
 * Icons
 */
import { Search } from 'lucide-react';

const Layout = () => {
  return (
    <div className='flex flex-col justify-between min-h-dvh'>
      <Header />
      <main>
        <article>
          <section className='pt-26 md:pt-34 mb-8'>
            <div className='container'>
              <search className='mx-auto max-w-3xl relative'>
                <input
                  type='text'
                  placeholder='Rechercher des produits, des marques ou des catégories...'
                  className='w-full border-2 border-gray-200 rounded-lg px-4 pr-10 py-2 focus:outline transition focus:border-blue-600 placeholder:text-sm'
                />
                <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-3' />
              </search>
            </div>
          </section>
          <Outlet />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
