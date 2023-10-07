/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

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

