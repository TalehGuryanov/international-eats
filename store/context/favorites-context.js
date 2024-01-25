import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  favoriteMealsIds: [],
  addFavorite: () => {},
  removeFavorite: () => {}
});

export const FavoritesContextProvider = ({children}) => {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);
  
  function addFavorite(id) {
    setFavoriteMealsIds((prevState => [...prevState, id]))
  }
  
  function removeFavorite(id) {
    setFavoriteMealsIds((prevState => prevState.filter((item) => item !== id)))
  }
  
  const value = {
    favoriteMealsIds,
    addFavorite,
    removeFavorite
  }
  
  return (
      <FavoritesContext.Provider value={value}>
        {children}
      </FavoritesContext.Provider>
  )
}

