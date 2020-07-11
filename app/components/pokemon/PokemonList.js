import React, { useState } from "react";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { MOCKUP_DATA } from "../../shared/data";
import { commonStyles } from "../../styles/common";

const PokemonListComponent = ({navigation}) => {
	
	const [pokemonData, setPokemonData] = useState(MOCKUP_DATA);
	
	const deletePokemon = (event) => {
		const array = [...pokemonData];
		const index = pokemonData.findIndex(item => item.id === event);
		if (index !== -1) {
			array.splice(index, 1);
			setPokemonData(array)
		}
	}
	
	return (
		<View>
			<FlatList data={pokemonData}
								renderItem={({item}) => (
									<View style={commonStyles.listItemContainer}>
										<TouchableOpacity
											style={commonStyles.listItem}
											onPress={() => navigation.navigate('PokemonDetail', {data: item})}>
											<Image source={{uri: item.img, width: 30, height: 30}}/>
											<Text style={commonStyles.listItemText}>{item.name}</Text>
										</TouchableOpacity>
					
										<TouchableOpacity
											onPress={() =>
												Alert.alert("Delete Pokemon", "Do you want to delete?", [
													{text: "Yes", onPress: () => deletePokemon(item.id)},
													{text: "No", onPress: () => console.log("No")},
												])
											}>
											<MaterialIcons name="delete" size={24} color="black"/>
										</TouchableOpacity>
									</View>
								)}
			/>
		</View>
	);
};

export default PokemonListComponent;
