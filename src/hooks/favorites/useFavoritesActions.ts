/**
 * Node modules
 */
import { useContext } from "react";
/**
 * Contexts
 */
import { FavoritesActionsContext } from "../../contexts/FavoritesContext";

const useFavoritesActions = () => useContext(FavoritesActionsContext);
export default useFavoritesActions;