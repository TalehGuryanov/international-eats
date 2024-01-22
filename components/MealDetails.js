import {Text, StyleSheet, View} from 'react-native';

export const MealDetails = ({duration, complexity, affordability}) => {
  return (
      <View style={styles.details}>
        <Text style={styles.detailsText}>{duration}m</Text>
        <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
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
  }
});