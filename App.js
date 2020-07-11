import React from "react";
import { SafeAreaView } from "react-native";

import { PokemonComponent } from "./app/components";
import { commonStyles } from "./app/styles/common";

export default function App() {
  return (
    <SafeAreaView style={commonStyles.appContainer}>
      <PokemonComponent/>
    </SafeAreaView>
  );
}
