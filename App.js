import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  ColorScreen from './ColorScreen'; 
import ProductScreen from './ProductScreen'; 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}