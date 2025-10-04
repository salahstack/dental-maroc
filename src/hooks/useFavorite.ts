/**
 * Node modules
 */
import { useContext } from "react";
/**
 * Contexts
 */
import { FavoriteContext } from "../contexts/FavoriteContext";

const useFavorite = () => useContext(FavoriteContext);

export {
  useFavorite
}