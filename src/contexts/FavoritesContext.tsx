/**
 * Node modules
 */
import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
/**
 * Hooks
 */
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Interfaces
*/
import type { ProductProps } from '../interfaces/products';


interface FavoriteContextInterface {
  favorites: ProductProps[];
  addToFavorite: (product: ProductProps) => void;
  removeFromFavorite: (id: number) => void;
  clearFavorite: () => void;
};

/**
 * Initial context value
 */

const initialContextValue: FavoriteContextInterface = {
  favorites: [],
  addToFavorite: () => {},
  removeFromFavorite: () => {},
  clearFavorite: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesContext = createContext(initialContextValue);

const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const { getItem, setItem, removeItem } = useLocalStorage();
  const [favorites, setFavorites] = useState<ProductProps[]>(
    () => getItem<ProductProps[]>('favorite') || []
  );

  const addToFavorite = useCallback(
    (product: ProductProps) => {
      setFavorites((prev) => {
        const exists = prev.some((item) => item.id === product.id);
        if (exists) return prev;

        const updateFavorites = [...prev, product];
        setItem('favorite', updateFavorites);
        return updateFavorites;
      });
    },
    [setItem]
  );

  const removeFromFavorite = useCallback(
    (id: number) => {
      setFavorites((prev) => {
        const updateFavorites = prev.filter((item) => item.id !== Number(id));
        setItem('favorite', updateFavorites);
        return updateFavorites;
      });
    },
    [setItem]
  );

  const clearFavorite = useCallback(() => {
    setFavorites([]);
    removeItem('favorite');
  }, [removeItem]);

  const contextValue = useMemo(
    () => ({ addToFavorite, removeFromFavorite, clearFavorite, favorites }),
    [addToFavorite, removeFromFavorite, clearFavorite, favorites]
  );

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteProvider;
