import { View, Text, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import {CategoryGridTile} from "../components/CategoryGridTile";

function renderItem(itemData, onPress) {
  return (
      <CategoryGridTile title={itemData.title} color={itemData.color} onPress={onPress}/>
  );
}

export const CategoriesScreen = ({navigation}) => {
  const onPressHandler = (item) => navigation.navigate('MealsOverviewScreen', {categoryId: item.id, categoryTitle: item.title});
  
  return (
    <FlatList
        data={CATEGORIES}
        renderItem={({item}) => renderItem(item, onPressHandler.bind(null, item))}
        keyExtractor={item => item.id}
        numColumns={2}
        horizontal={false}
    />
  );
}