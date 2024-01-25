import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
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
    ids: favoriteMealsIds,
    addFavorite,
    removeFavorite
  }
  
  return (
      <FavoritesContext.Provider value={value}>
        {children}
      </FavoritesContext.Provider>
  )
}

