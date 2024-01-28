import {FlatList, StyleSheet, View, Text} from 'react-native';
import {useMemo} from "react";
import {MealItem} from "../components/MealItem";

import {MEALS} from "../data/dummy-data";
import {useSelector} from "react-redux";

export const FavoritesScreen = () => {
  const favorites = useSelector(state => state.favorites) || [];
  
  const selectedMeals = useMemo(
      () => MEALS.filter(meal => favorites.indexOf(meal.id) >= 0),
      [favorites]);
  
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