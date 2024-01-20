import { View, Text, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import {CategoryGridTile} from "../components/CategoryGridTile";

function renderItem(itemData, onPress) {
  return (
      <CategoryGridTile title={itemData.title} color={itemData.color} onPress={onPress}/>
  );
}

export const CategoriesScreen = ({navigation}) => {
  const onPressHandler = () => navigation.navigate('Meals Overview');
  return (
    <FlatList
        data={CATEGORIES}
        renderItem={({item}) => renderItem(item, onPressHandler)}
        keyExtractor={item => item.id}
        numColumns={2}
        horizontal={false}
    />
  );
}