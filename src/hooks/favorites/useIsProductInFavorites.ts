// hooks/favorites/useIsProductInFavorites.ts
import { useContext, useMemo } from "react";
import { FavoritesStateContext } from "../../contexts/FavoritesContext";

const useIsProductInFavorites = (id: number) => {
  const favorites = useContext(FavoritesStateContext);
  
  return useMemo(
    () => favorites.some((item) => item.id === id),
    [favorites, id]
  );
};

export default useIsProductInFavorites;