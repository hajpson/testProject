import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    listItemContainer: {
        padding: 12,
        backgroundColor: colors.white,
        borderBottomWidth: 2,
        borderBottomColor: colors.nightPurple,
        margin: 6,
        borderRadius: 12
    },

    strechHeightWrapper: {
        display: 'flex',
        flex: 1
    },

    mainContainer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'stretch'
    },

    listItem: {
        fontSize: 20
    },

    bigHeader: {
        fontSize: 36,
        fontFamily: 'Josefin Sans Bold'
    },

    descriptionText: {
        fontSize: 20
    },

    listContainer: {
        paddingVertical: 12
    },

    customText: {
        fontFamily: 'Josefin Sans Regular',
        color: colors.nightPurple
    },

    floatingSeparator: {
        height: 1.5,
        backgroundColor: colors.nightGray,
        marginHorizontal: 12,
        borderRadius: 12
    },

    detailsContainer: {
        padding: 12
    },

    detailsSubcontainer: {
        paddingHorizontal: 12,
    },

    fab: {
        position: "absolute",
        borderRadius: 12,
        right: 20,
        bottom: 20,
        padding: 10,
        backgroundColor: colors.nightPurple
    },

    fabTitle: {
        color: colors.white,
        fontFamily: 'Josefin Sans Bold',
        fontSize: 20
    },

    mainPressable: {
        borderRadius: 12,
        padding: 10,
        marginTop: 10,
        backgroundColor: colors.nightPurple,
        alignSelf: "center"
    },

    textInput: {
        padding: 12,
        margin: 6,
        fontSize: 20,
        backgroundColor: colors.nightPurple,
        color: colors.white,
        borderRadius: 12,
        fontFamily: 'Josefin Sans Regular',
    },

    todoIndicator: {
        fontSize: 20,
        marginTop: 12
    },

    accomplishedTodoIndicator: {
        color: colors.happyGreen
    },

    notAccomplishedTodoIndicator: {
        color: colors.angryRed
    },

    emptyListContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },

    emptyListHeader: {
        fontSize: 20
    },

    underlayLeft: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },

    underlayRight: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },

    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        flex: 1
    },

    deleteSwipeableText: {
        color: colors.white,
        fontWeight: "bold"
    },

    deleteSwipeablePressable: {
        borderRadius: 12,
        backgroundColor: colors.angryRed,
        marginRight: 12,
        padding: 12
    },

    editSwipeablePressable: {
        borderRadius: 12,
        backgroundColor: colors.nightGray,
        marginRight: 12,
        padding: 12
    },

    todoneSwipeablePressable: {
        borderRadius: 12,
        backgroundColor: colors.happyGreen,
        marginLeft: 12,
        padding: 12
    },

    todoneSwipeableText: {
        color: colors.white,
        fontWeight: "bold"
    }
})