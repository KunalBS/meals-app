import { Button, StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealScreen from './screens/MealScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle : { backgroundColor: '#ccc' },
      }}>
        <Stack.Screen 
        name="MealsCategories" 
        component={CategoryScreen}
        options={{
          title:"All Categories",
          // headerStyle : { backgroundColor: '#ccc' },
          // headerTintColor: 'white',
          // contentStyle:{
          //   backgroundColor:  '#ccc'
          // }
        }}/>
        <Stack.Screen name="MealsOverview" component={MealScreen}/>
        <Stack.Screen name="FoodOverview"
         component={FoodDetailScreen}
         />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  }, 
});
