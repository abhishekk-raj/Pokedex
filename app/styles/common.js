import { Platform, StatusBar, StyleSheet } from 'react-native';
import colors from "./colors";

export const commonStyles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: colors.colorSecondary,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	listItem: {
		padding: 10,
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 5,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center'
	},
	
	listItemText: {
		fontSize: 18,
		marginLeft: 10
	}
})
