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
        height: Dimensions.get('screen').height-300,
        position: 'absolute',
        top: 125,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    input: {
      width: Dimensions.get('screen').width-200,
      backgroundColor: Colors.darkGray,
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
    },
    title: {
        width: Dimensions.get('screen').width,
        fontSize: 30,
        height: 100,
        textAlign: 'center',
        color: Colors.lightWhite,
    },
    subtitle: {
        color: Colors.lightGray,
        fontSize: 20,
        width: Dimensions.get('screen').width - 100,
        marginHorizontal: 50,
        height: 50,
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

const Login = StyleSheet.create({
    title: {
        width: Dimensions.get('screen').width,
        textAlign: 'center',
    }
})

export default Components;
export { 
    Flex,
    Login
};

