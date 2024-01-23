import {Button, StatusBar, StyleSheet} from 'react-native';
import {CategoriesScreen} from "./screens/CategoriesScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MealsOverviewScreen} from "./screens/MealsOverviewScreen";
import {MealDetailScreen} from "./screens/MealDetailScreen";
import {log} from "expo/build/devtools/logger";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <>
        <NavigationContainer>
          <Stack.Navigator
              initialRouteName="Categories"
              screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: '#fff',
                contentStyle: { backgroundColor: '#3f3f25' },
              }}
          >
            <Stack.Screen
                name="CategoriesScreen"
                component={CategoriesScreen}
                options={{
                  title: 'All Categories',
                }}
            />
            <Stack.Screen
                name="MealsOverviewScreen"
                component={MealsOverviewScreen}
                options={({route}) => ({title: route.params.categoryTitle})}
            />
            <Stack.Screen
                name="MealDetailScreen"
                component={MealDetailScreen}
                options={({route}) => ({
                  title: route.params.mealTitle,
                })}
            />
          </Stack.Navigator>
        </NavigationContainer>
        
        <StatusBar style="light"/>
      </>
);
}

const styles = StyleSheet.create({
  container: {

  },
});
