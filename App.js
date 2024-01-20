import {StatusBar, StyleSheet} from 'react-native';
import {CategoriesScreen} from "./screens/CategoriesScreen";

export default function App() {
  return (
      <>
        <CategoriesScreen/>
        <StatusBar style="light"/>
      </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
