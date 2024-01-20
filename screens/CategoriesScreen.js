import { View, Text, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import {CategoryGridTile} from "../components/CategoryGridTile";

function renderItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
  );
}

export const CategoriesScreen = () => {
  return (
    <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        horizontal={false}
    />
  );
}