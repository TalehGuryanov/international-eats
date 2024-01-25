import {FlatList, StyleSheet, View, Text} from 'react-native';
import {FavoritesContext} from "../store/context/favorites-context";
import {useContext, useMemo} from "react";
import {MealItem} from "../components/MealItem";

import {MEALS} from "../data/dummy-data";

export const FavoritesScreen = () => {
  const favoritesContext = useContext(FavoritesContext);
  const {favoriteMealsIds} = favoritesContext
  
  const selectedMeals = useMemo(
      () => MEALS.filter(meal => favoriteMealsIds.indexOf(meal.id) >= 0),
      [favoriteMealsIds]);
  
  return (
      <View style={styles.container}>
        {selectedMeals.length ? <FlatList
            data={selectedMeals}
            renderItem={({item}) => <MealItem item={item}/>}
            keyExtractor={item => item.id}
        /> : <Text style={styles.text}>No favorite meals</Text>}
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
   text: {
    fontSize: 24,
     textAlign: "center"
   }
});