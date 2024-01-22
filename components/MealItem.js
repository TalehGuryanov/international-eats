import {View, Text, Pressable, Image, StyleSheet, Platform} from 'react-native';

export const MealItem = ({item}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
          android_ripple={{color: '#ccc'}}
          style={({pressed}) => [styles.mealItemInner, pressed && styles.buttonPressed]}
      >
        <Image source={{uri: item.imageUrl}} style={styles.image}/>
        
        <View style={styles.copy}>
          <Text style={styles.title}>{item.title}</Text>
  
          <View style={styles.details}>
            <Text style={styles.detailsText}>{item.duration}m</Text>
            <Text style={styles.detailsText}>{item.complexity.toUpperCase()}</Text>
            <Text style={styles.detailsText}>{item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  mealItemInner: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  copy: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
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