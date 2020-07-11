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
	}
})
