/* eslint-disable react-refresh/only-export-components */
/**
 * Node modules
 */
import { createContext, useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";

interface ProductInterface {
  id: number;
  image: string;
  title: string;
  description: string;
  quantity: number;
  price: number
}

interface CartContextInterface {
  cart: ProductInterface[];
  addProduct: (product: ProductInterface) => void;
  removeProduct: (id: number) => void;
  clearCart: () => void
}

const initialContextValue: CartContextInterface = {
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {}
}

export const CartContext = createContext(initialContextValue);





const CartProvider = ({ children } : { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductInterface[]>([]);

  const addProduct = useCallback((newProduct: ProductInterface) => {
    setCart(prevCart => {
      const productExists = cart.find((item) => Number(item.id) === Number(newProduct.id));
    if(productExists) {
      return prevCart.map(item => item.id === newProduct.id ? { ...item, quantity: newProduct.quantity  } : item)
    }
    else {
      return [...prevCart, newProduct]
    }
    })

  }, [cart])

  const removeProduct = useCallback((id: number) => {
    setCart(prevCart => prevCart.filter((item) => item.id !== id))
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, [])

  const contextValue = useMemo(() => {
    return { cart, addProduct, clearCart, removeProduct }
  }, [cart, addProduct, clearCart, removeProduct])
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;