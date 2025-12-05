/* eslint-disable react-refresh/only-export-components */
/**
 * Node modules
 */
import { createContext, useCallback, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
/**
 * Custom hooks
 */
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Interfaces
 */

interface ProductInterface {
  id: number;
  image: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
}

interface CartActionsContextInterface {
  addToCart: (product: ProductInterface) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

/**
 * Initial Context Value
 */

const initialCartActionsContextValue: CartActionsContextInterface = {
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
};

// State context is just the array directly
export const CartStateContext = createContext<ProductInterface[]>([]);
export const CartActionsContext = createContext<CartActionsContextInterface>(
  initialCartActionsContextValue
);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const { removeItem, setItem, getItem } = useLocalStorage();
  const [cart, setCart] = useState<ProductInterface[]>(
    () => getItem<ProductInterface[]>('cart') || []
  );

  const addToCart = useCallback(
    (newProduct: ProductInterface) => {
      setCart((prevCart) => {
        const productExists = prevCart.find(
          (item) => Number(item.id) === Number(newProduct.id)
        );

        let updatedCart;
        if (productExists) {
          updatedCart = prevCart.map((item) =>
            item.id === newProduct.id
              ? { ...item, quantity: item.quantity + newProduct.quantity }
              : item
          );
        } else {
          updatedCart = [...prevCart, newProduct];
        }

        setItem('cart', updatedCart);
        return updatedCart;
      });
    },
    [setItem]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      setCart((prevCart) => {
        const updatedCart = prevCart.filter((item) => item.id !== id);
        setItem('cart', updatedCart);
        return updatedCart;
      });
    },
    [setItem]
  );

  const clearCart = useCallback(() => {
    setCart([]);
    removeItem('cart');
  }, [removeItem]);

  const actions = useMemo(() => {
    return { addToCart, clearCart, removeFromCart };
  }, [addToCart, clearCart, removeFromCart]);

  return (
    <CartActionsContext.Provider value={actions}>
      <CartStateContext.Provider value={cart}>
        {children}
      </CartStateContext.Provider>
    </CartActionsContext.Provider>
  );
};

export default CartProvider;
