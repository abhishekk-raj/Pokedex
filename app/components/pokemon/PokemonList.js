import React, { useState } from "react";
import { Alert, FlatList, Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { MOCKUP_DATA } from "../../shared/data";
import { commonStyles } from "../../styles/common";
import { defaultImage } from "../../shared/defaults";

const PokemonListComponent = ({navigation}) => {
	
	const [pokemonData, setPokemonData] = useState(MOCKUP_DATA);
	const [modalVisible, setModalVisible] = useState(false);
	const [pokemonForm, setPokemonForm] = useState({
		id: (pokemonData.length + 1).toString(),
		name: "",
		img: "",
		type: [],
		stats: {
			hp: "",
			attack: "",
			defense: "",
			spattack: "",
			spdefense: "",
			speed: ""
		}
	});
	
	const deletePokemon = (event) => {
		const array = [...pokemonData];
		const index = pokemonData.findIndex(item => item.id === event);
		if (index !== -1) {
			array.splice(index, 1);
			setPokemonData(array)
		}
	}
	
	const handleForm = (name, value) => {
		switch (name) {
			case 'name':
				setPokemonForm({
					...pokemonForm,
					name: value
				});
				break;
			
			case 'hp':
				setPokemonForm({
					...pokemonForm,
					stats: ({
						...pokemonForm.stats,
						hp: value
					})
				});
				break;
			
			case 'attack':
				setPokemonForm({
					...pokemonForm,
					stats: ({
						...pokemonForm.stats,
						attack: value
					})
				});
				break;
			
			case 'defence':
				setPokemonForm({
					...pokemonForm,
					stats: ({
						...pokemonForm.stats,
						defense: value
					})
				});
				break;
			
			case 'type':
				setPokemonForm({
					...pokemonForm,
					type: [value]
				});
				break;
		}
	}
	
	const addNewPokemon = () => {
		console.log(pokemonForm);
		setPokemonData([
			...pokemonData,
			pokemonForm
		]);
	}
	
	return (
		<View>
			<FlatList
				data={pokemonData}
				renderItem={({item}) => (
					<View style={commonStyles.listItemContainer}>
						<TouchableOpacity
							style={commonStyles.listItem}
							onPress={() => navigation.navigate('PokemonDetail', {data: item})}>
							<Image source={{
								uri: item.img !== "" ? item.img : defaultImage,
								width: 30,
								height: 30
							}}/>
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
			
			<View style={{alignItems: 'center'}}>
				<TouchableOpacity
					style={commonStyles.floatingActionButton}
					onPress={() => {
						setModalVisible(true);
					}}>
					<MaterialIcons name="add" size={30} color="#FFFFFF"/>
				</TouchableOpacity>
			</View>
			
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
				}}>
				<View style={commonStyles.modalOverlay}>
					<View style={commonStyles.modalView}>
						<View style={commonStyles.modalViewHeader}>
							<Text style={{fontWeight: '500'}}>Add Pokemon</Text>
						</View>
						
						<View>
							<TextInput
								style={commonStyles.formInput}
								placeholder='Name'
								type='text'
								onChangeText={(e) => handleForm('name', e)}
							/>
							
							<TextInput
								style={commonStyles.formInput}
								placeholder='HP'
								type='text'
								keyboardType='numeric'
								onChangeText={(e) => handleForm('hp', e)}
							/>
							
							<TextInput
								style={commonStyles.formInput}
								placeholder='Attack'
								type='text'
								keyboardType='numeric'
								onChangeText={(e) => handleForm('attack', e)}
							/>
							
							<TextInput
								style={commonStyles.formInput}
								placeholder='Defence'
								type='text'
								keyboardType='numeric'
								onChangeText={(e) => handleForm('defence', e)}
							/>
							
							<TextInput
								style={commonStyles.formInput}
								placeholder='Type'
								type='text'
								onChangeText={(e) => handleForm('type', e)}
							/>
						</View>
						
						<TouchableOpacity
							style={commonStyles.addPokemonButton}
							onPress={() => {
								addNewPokemon();
								setModalVisible(!modalVisible);
							}}>
							<Text style={{color: '#FFFFFF'}}>Add</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default PokemonListComponent;
