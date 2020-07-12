import { Platform, StatusBar, StyleSheet } from 'react-native';
import colors from "./colors";

export const commonStyles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	
	listItemContainer: {
		padding: 10,
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 5,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center'
	},
	
	listItem: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	
	listItemText: {
		fontSize: 18,
		marginLeft: 10
	},
	
	detailViewContainer: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
		margin: 15,
		borderRadius: 5,
	},
	
	detailViewImage: {
		width: '100%',
		height: '55%'
	},
	
	detailViewTitle: {
		fontSize: 40,
		color: colors.colorPrimaryDark,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 5
	},
	
	detailViewType: {
		fontSize: 16,
		color: colors.colorGrey,
		padding: 0,
		paddingLeft: 15
	},
	
	detailViewDivider: {
		height: 1,
		backgroundColor: colors.colorSecondaryDark,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 30
	},
	
	detailViewStatsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
		marginTop: 30,
		paddingRight: 15
	},
	
	detailViewStatsSingleView: {
		alignItems: 'center'
	},
	
	detailViewStatsCount: {
		fontSize: 25,
		color: colors.colorPrimaryDark
	},
	
	floatingActionButton: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
		height: 60,
		position: 'absolute',
		bottom: 10,
		backgroundColor: colors.colorPrimaryDark,
		borderRadius: 100,
		elevation: 5,
		shadowColor: colors.colorGrey,
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.8,
		shadowRadius: 2,
	},
	
	modalOverlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.colorOverlay,
	},
	
	modalView: {
		margin: 20,
		backgroundColor: colors.colorPrimary,
		borderRadius: 5,
		alignItems: "center",
		shadowColor: colors.colorGrey,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	
	modalViewHeader: {
		width: 300,
		height: 40,
		borderWidth: 1,
		borderColor: '#ddd',
		borderBottomWidth: 1,
		borderRadius: 5,
		justifyContent: 'center',
		paddingLeft: 10,
	},
	
	formInput: {
		width: 280,
		height: 40,
		borderColor: colors.colorGrayLight,
		borderWidth: 1,
		marginTop: 10,
		borderRadius: 5,
		padding: 10
	},
	
	addPokemonButton: {
		backgroundColor: colors.colorPrimaryDark,
		padding: 10,
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 5,
		color: colors.colorPrimary
	}
})
