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

interface FavoriteActionsContextInterface {
  addToFavorites: (product: ProductProps) => void;
  removeFromFavorites: (id: number) => void;
  clearFavorites: () => void;
}

/**
 * Initial Context Value
 */

const initialFavoritesActionsContextValue: FavoriteActionsContextInterface = {
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  clearFavorites: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesActionsContext =
  createContext<FavoriteActionsContextInterface>(
    initialFavoritesActionsContextValue
  );
// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesStateContext = createContext<ProductProps[]>([]);

const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const { getItem, setItem, removeItem } = useLocalStorage();
  const [favorites, setFavorites] = useState<ProductProps[]>(
    () => getItem<ProductProps[]>('favorite') || []
  );

  const addToFavorites = useCallback(
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

  const removeFromFavorites = useCallback(
    (id: number) => {
      setFavorites((prev) => {
        const updateFavorites = prev.filter((item) => item.id !== Number(id));
        setItem('favorite', updateFavorites);
        return updateFavorites;
      });
    },
    [setItem]
  );

  const clearFavorites = useCallback(() => {
    setFavorites([]);
    removeItem('favorite');
  }, [removeItem]);

  const actions = useMemo(
    () => ({
      addToFavorites,
      removeFromFavorites,
      clearFavorites,
    }),
    [addToFavorites, removeFromFavorites, clearFavorites]
  );

  return (
    <FavoritesActionsContext.Provider value={actions}>
      <FavoritesStateContext.Provider value={favorites}>
        {children}
      </FavoritesStateContext.Provider>
    </FavoritesActionsContext.Provider>
  );
};

export default FavoriteProvider;
