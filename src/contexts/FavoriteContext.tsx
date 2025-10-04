import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ProductInterface {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

interface FavoriteContextInterface {
  favorite: ProductInterface[];
  addToFavorite: (product: ProductInterface) => void;
  removeFromFavorite: (id: number) => void;
  clearFavorite: () => void;
}

const initialContextValue: FavoriteContextInterface = {
  favorite: [],
  addToFavorite: () => {},
  removeFromFavorite: () => {},
  clearFavorite: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteContext = createContext(initialContextValue);

const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const { getItem, setItem, removeItem } = useLocalStorage();
  const [favorite, setFavorite] = useState<ProductInterface[]>(
    () => getItem<ProductInterface[]>('favorite') || []
  );

  const addToFavorite = useCallback(
    (product: ProductInterface) => {
      setFavorite((prev) => {
        const exists = prev.some((item) => item.id === product.id);
        if (exists) return prev;

        const updateFavorite = [...prev, product];
        setItem('favorite', updateFavorite);
        return updateFavorite;
      });
    },
    [setItem]
  );

  const removeFromFavorite = useCallback(
    (id: number) => {
      setFavorite((prev) => {
        const updateFavorite = prev.filter((item) => item.id !== Number(id));
        setItem('favorite', updateFavorite);
        return updateFavorite;
      });
    },
    [setItem]
  );

  const clearFavorite = useCallback(() => {
    setFavorite([]);
    removeItem('favorite');
  }, [removeItem]);

  const contextValue = useMemo(
    () => ({ addToFavorite, removeFromFavorite, clearFavorite, favorite }),
    [addToFavorite, removeFromFavorite, clearFavorite, favorite]
  );

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
