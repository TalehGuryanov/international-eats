import {Button, StatusBar, StyleSheet} from 'react-native';
import {CategoriesScreen} from "./screens/CategoriesScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import {MealsOverviewScreen} from "./screens/MealsOverviewScreen";
import {MealDetailScreen} from "./screens/MealDetailScreen";
import {FavoritesScreen} from "./screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#fff',
        sceneContainerStyle: { backgroundColor: '#3f3f25' },
        drawerContentStyle: { backgroundColor: '#eee9e9'},
        drawerInactiveTintColor: '#424040',
        drawerActiveTintColor: '#000000'
      }}>
        <Drawer.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              drawerIcon: ({color,size})=> <Ionicons name="list" color={color} size={size}/>
            }}
        />
        <Drawer.Screen
            name="FavoritesScreen"
            component={FavoritesScreen}
            options={{
              title: "Favorites",
              drawerIcon: ({color,size})=> <Ionicons name="star" color={color} size={size}/>
            }}
        />
      </Drawer.Navigator>
  )
}

export default function App() {
  return (
      <>
        <NavigationContainer>
          <Stack.Navigator
              initialRouteName="Drawer"
              screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: '#fff',
                contentStyle: { backgroundColor: '#3f3f25' },
              }}
          >
            <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                  headerShown: false
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
