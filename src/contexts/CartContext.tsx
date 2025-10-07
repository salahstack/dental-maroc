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

interface ProductInterface {
  id: number;
  image: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
}

interface CartContextInterface {
  cart: ProductInterface[];
  addProduct: (product: ProductInterface) => void;
  removeProduct: (id: number) => void;
  clearCart: () => void;
}

const initialContextValue: CartContextInterface = {
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
};

export const CartContext = createContext(initialContextValue);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const { removeItem, setItem, getItem } = useLocalStorage();
const [cart, setCart] = useState<ProductInterface[]>(() => getItem<ProductInterface[]>('cart') || []);

  const addProduct = useCallback(
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

  const removeProduct = useCallback(
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

  const contextValue = useMemo(() => {
    return { cart, addProduct, clearCart, removeProduct };
  }, [cart, addProduct, clearCart, removeProduct]);
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
