import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetailComponent from "./PokemonDetail";
import PokemonListComponent from "./PokemonList";

const Stack = createStackNavigator();

const PokemonComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PokemonList">
        <Stack.Screen
          name="PokemonList"
          component={PokemonListComponent}
          options={{ title: 'Home' }}/>
          
        <Stack.Screen
          name="PokemonDetail"
          component={PokemonDetailComponent}
          options={{ title: 'Detail' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PokemonComponent;
