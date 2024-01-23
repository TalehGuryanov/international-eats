import {Text, StyleSheet} from "react-native";

export const Subtitle = ({children, style}) => {
  return (
      <Text style={[styles.subtitle, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
  }
});