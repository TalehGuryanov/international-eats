import {View, Text, Image, ScrollView, StyleSheet} from "react-native";

import {MEALS} from "../data/dummy-data";
import {useMemo} from "react";
import {MealDetails} from "../components/MealDetails";
import {Subtitle} from "../components/Subtitle";
import {List} from "../components/List";

export const MealDetailScreen = ({route}) => {
  const {mealId} = route.params;
  
  const selectedMeal = useMemo(
      () => MEALS.find(meal => meal.id=== mealId),
      [mealId]);
  
  return (
      <ScrollView>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <View style={styles.contentWr}>
          <Text style={styles.title}>{selectedMeal.title}</Text>
          <MealDetails
              duration={selectedMeal.duration}
              complexity={selectedMeal.complexity}
              affordability={selectedMeal.affordability}
              textStyle={styles.details}
              style={styles.detailsWrapper}
          />
          <View style={styles.listWr}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps}/>
          </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  contentWr: {
    padding: 18,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 8,
    color: '#fff',
  },
  detailsWrapper: {
    marginBottom: 12,
  },
  details: {
    color: '#fff',
  },
  listWr: {
    width: '100%',
  }
});