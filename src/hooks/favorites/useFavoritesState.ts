/**
 * Node modules
 */
import { useContext } from "react";
/**
 * Contexts
 */
import { FavoritesStateContext } from "../../contexts/FavoritesContext";

const useFavoritesState = () => useContext(FavoritesStateContext);
export default useFavoritesState;