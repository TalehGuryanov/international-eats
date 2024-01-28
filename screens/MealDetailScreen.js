import {View, Text, Image, ScrollView, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {MEALS} from "../data/dummy-data";
import {useMemo, useLayoutEffect} from "react";
import {MealDetails} from "../components/MealDetails";
import {Subtitle} from "../components/Subtitle";
import {List} from "../components/List";
import {IconButton} from "../components/IconButton";
import {addFavorite, removeFavorite} from "../store/redux/favorites";

export const MealDetailScreen = ({route, navigation}) => {
  const favorites = useSelector(state => state.favorites) || [];
  const dispatch = useDispatch();
  const {mealId} = route.params;
  
  const selectedMeal = useMemo(
      () => MEALS.find(meal => meal.id=== mealId),
      [mealId]);
  
  const isFavoriteMeal = useMemo(() => {
    return favorites ? favorites.indexOf(mealId) >= 0 : false;
    
  }, [mealId, favorites])
  
  const toggleFavorite = () => {
    if(isFavoriteMeal) {
     dispatch(removeFavorite(mealId));
    } else {
     dispatch(addFavorite(mealId));
    }
  }
  
  const iconName = isFavoriteMeal ? "star" : "star-outline"
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <IconButton icon={iconName} color={"#fff"} onPress={toggleFavorite} />
      ),
  })
  }, [navigation, toggleFavorite]);
  
  return (
      <ScrollView>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <View style={styles.contentWr}>
          <Text style={styles.title}>{selectedMeal.title}</Text>
          <MealDetails
              duration={selectedMeal.duration}
              complexity={selectedMeal.complexity}
              affordability={selectedMeal.affordability}
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
    color: '#000',
  },
  detailsWrapper: {
    marginBottom: 12,
  },
  listWr: {
    width: '100%',
  }
});