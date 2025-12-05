/**
 * Node modules
 */
import { useContext } from "react";

/**
 * Contexts
*/
import { CartStateContext } from "../../contexts/CartContext";

const useCartState = () => useContext(CartStateContext);
export default useCartState;