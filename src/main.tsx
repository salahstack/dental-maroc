import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './routes/routes.tsx';
import { RouterProvider } from 'react-router-dom';
import CartProvider from './contexts/CartContext.tsx';
import FavoriteProvider from './contexts/FavoritesContext.tsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <FavoriteProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </FavoriteProvider>
    </HelmetProvider>
  </StrictMode>
);
