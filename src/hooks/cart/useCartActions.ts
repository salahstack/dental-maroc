/**
 * Node modules
 */
import { useContext } from 'react';
/**
 * Contexts
 */
import { CartActionsContext } from '../../contexts/CartContext';

const useCartActions = () => useContext(CartActionsContext);

export default useCartActions;
