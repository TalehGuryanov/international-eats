import {Text, View, StyleSheet} from "react-native";

export const List = ({data, style}) => {
  return (
      data.map((item, index) => <View style={[styles.item,style]}>
          <Text style={styles.text} key={item + index}>{item}</Text>
        </View>)
  )
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#f6b3b3',
  },
  text: {
    color: '#000',
    textAlign: 'center',
  }
})