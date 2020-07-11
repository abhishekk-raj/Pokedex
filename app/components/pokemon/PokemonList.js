import React from "react";
import { Text, View, Button } from "react-native";

const PokemonListComponent = ({ navigation }) => {
  
  const pressHandler = () => {
    navigation.navigate('PokemonDetail')
  }
  return (
    <View>
      <Text>ListComponent</Text>
      <Button title='go to detail' onPress={pressHandler}/>
    </View>
  );
};

export default PokemonListComponent;
