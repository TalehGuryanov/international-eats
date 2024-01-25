import {Text, StyleSheet, View} from 'react-native';

export const MealDetails = ({duration, complexity, affordability, style, textStyle}) => {
  return (
      <View style={[styles.details, style]}>
        <Text style={[styles.detailsText, textStyle]}>{duration}m</Text>
        <Text style={[styles.detailsText, textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailsText, textStyle]}>{affordability.toUpperCase()}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsText: {
    marginHorizontal: 4,
    fontSize: 12,
    color: '#000'
  }
});