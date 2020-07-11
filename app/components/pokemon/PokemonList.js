import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { MOCKUP_DATA } from "../../shared/data";
import { commonStyles } from "../../styles/common";

const PokemonListComponent = ({navigation}) => {
	
	const [pokemonData, setPokemonData] = useState(MOCKUP_DATA);
	
	return (
		<View>
			<FlatList data={pokemonData}
								renderItem={({item}) => (
									<TouchableOpacity
										style={commonStyles.listItem}
										onPress={() => navigation.navigate('PokemonDetail', {data: item})}>
										<Image source={{uri: item.img, width: 30, height: 30}}/>
										<Text style={commonStyles.listItemText}>{item.name}</Text>
									</TouchableOpacity>
								)}
			/>
		</View>
	);
};

export default PokemonListComponent;
