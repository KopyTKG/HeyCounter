/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./vars";

const Components = StyleSheet.create({
    header: {
        padding: 10,
    },
    button: {
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 5,
        aspectRatio: 4 / 2,
    },
    body: {
        height: Dimensions.get('screen').height,
        paddingVertical: 50,
        backgroundColor: Colors.darkBlack,
    },
    login: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    input: {
      width: Dimensions.get('screen').width-200,
      backgroundColor: Colors.darkWhite,
      color: Colors.darkBlack, 
      borderColor: Colors.darkWhite,
      borderRadius: 10, 
      borderWidth: 2,
      textAlign: 'center',
    },
    nav: {
        padding:20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footer: {
        width: Dimensions.get('screen').width,
        height: 20,
        position: 'absolute',
        top: Dimensions.get('screen').height-100,
        display: 'flex',
        alignItems: 'center',
    },
    footerText: {
        width: 150,
        textAlign: 'center',
    }
});

const Flex = StyleSheet.create({
    end: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
    },
    start: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
});

export default Components;
export { 
    Flex,
};

