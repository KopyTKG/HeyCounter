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

