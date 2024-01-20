import { View, Text } from 'react-native';

export const MealItem = ({item}) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}