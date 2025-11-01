/**
 * Node modules
 */
import { createBrowserRouter, Navigate } from 'react-router-dom';

/**
 * Pages
 */
import Register from '../pages/Register';
import Login from '../pages/login';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import BestSellers from '../pages/BestSellers';
import NewArrivals from '../pages/NewArrivals';
import Shop from '../pages/Shop';
import Favorites from '../pages/Favorites';
import ConfirmOrder from '../pages/ConfirmOrder';
/**
 * Layouts
 */
import Layout from '../Layouts/Layout';

/**
 * Routes
 */

const router = createBrowserRouter([
  {
    path: 's-inscrire',
    Component: Register,
  },
  {
    path: 'se-connecter',
    Component: Login,
  },
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to='/home'
            replace
          />
        ),
      },
      {
        path: 'accueil',
        Component: Home,
      },
      {
        path: 'produits/:slug',
        Component: ProductDetails,
      },
      {
        path: 'meilleures-ventes',
        Component: BestSellers,
      },
      {
        path: 'nouveaux-arrivages',
        Component: NewArrivals,
      },
      {
        path: 'boutique',
        Component: Shop,
      },
      {
        path: 'favoris',
        Component: Favorites,
      },
      {
        path: '*',
        element: (
          <Navigate
            to='/accueil'
            replace
          />
        ),
      },
    ],
  },
  {
    path: 'confirmation-commande',
    Component: ConfirmOrder,
  },
]);

export default router;
