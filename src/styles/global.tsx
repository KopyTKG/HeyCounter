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
        width: Dimensions.get('screen').width - 20,
        display: "flex",
        padding: 5,
    }
});

const Flex = StyleSheet.create({
    end: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    start: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
    },
});

export default Components;
export { 
    Flex,
};

