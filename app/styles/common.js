import { Platform, StatusBar, StyleSheet } from 'react-native';
import colors from "./colors";

export const commonStyles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: colors.colorSecondary,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	}
})
