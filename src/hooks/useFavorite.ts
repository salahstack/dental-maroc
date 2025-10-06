/**
 * Node modules
 */
import { useContext } from 'react';
/**
 * Contexts
 */
import { FavoritesContext } from '../contexts/FavoritesContext';

const useFavorite = () => useContext(FavoritesContext);

export { useFavorite };
