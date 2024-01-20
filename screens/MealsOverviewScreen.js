import {MEALS} from "../data/dummy-data";
import {View, Text, StyleSheet, FlatList} from "react-native";
import {useMemo} from "react";
import {MealItem} from "../components/MealItem";

export const MealsOverviewScreen = ({route}) => {
  const {categoryId} = route.params;
  
  const selectedMeals = useMemo(
      () => MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0),
      [categoryId]);
  
    return (
        <View style={styles.container}>
          <FlatList
              data={selectedMeals}
              renderItem={({item}) => <MealItem item={item}/>}
              keyExtractor={item => item.id}
          />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});