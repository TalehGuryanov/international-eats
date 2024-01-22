import {View, Text, Image, FlatList, StyleSheet} from "react-native";

import {MEALS} from "../data/dummy-data";
import {useMemo} from "react";
import {MealDetails} from "../components/MealDetails";

export const MealDetailScreen = ({route}) => {
  const {mealId} = route.params;
  
  const selectedMeal = useMemo(
      () => MEALS.find(meal => meal.id=== mealId),
      [mealId]);
  
  return (
      <View>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <Text>{selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}/>
        <View>
          <Text>Ingredients</Text>
          <FlatList
              data={selectedMeal.ingredients}
              renderItem={({item}) => <Text>{item}</Text>}
              keyExtractor={item => item}
          />
          <Text>Steps</Text>
          <FlatList
              data={selectedMeal.steps}
              renderItem={({item}) => <Text>{item}</Text>}
              keyExtractor={item => item}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  }
});