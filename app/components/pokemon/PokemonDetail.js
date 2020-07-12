import React from "react";
import { Image, Text, View } from "react-native";
import { commonStyles } from "../../styles/common";
import { defaultImage } from "../../shared/defaults";

const PokemonDetailComponent = ({route}) => {
  const {data} = route.params;
  
  return (
    <View style={commonStyles.detailViewContainer}>
      <Image
        resizeMode='contain'
        style={commonStyles.detailViewImage}
        source={{uri: data.img !== "" ? data.img : defaultImage}}
      />
      <Text style={commonStyles.detailViewTitle}> {data.name} </Text>
      <Text style={commonStyles.detailViewType}> {data.type.join(" | ")} </Text>
      
      <View style={commonStyles.detailViewDivider}/>
      
      <View style={commonStyles.detailViewStatsContainer}>
        <View style={commonStyles.detailViewStatsSingleView}>
          <Text style={commonStyles.detailViewStatsCount}> {data.stats.hp} </Text>
          <Text> HP </Text>
        </View>
        
        <View style={commonStyles.detailViewStatsSingleView}>
          <Text style={commonStyles.detailViewStatsCount}> {data.stats.attack} </Text>
          <Text> Attack </Text>
        </View>
        
        <View style={commonStyles.detailViewStatsSingleView}>
          <Text style={commonStyles.detailViewStatsCount}> {data.stats.defense} </Text>
          <Text> Defense </Text>
        </View>
      </View>
    </View>
  );
};

export default PokemonDetailComponent;
