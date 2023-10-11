/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native"
import { Colors } from "./vars"


const Nav = StyleSheet.create({
    user: {
        color: Colors.darkBlack,
        fontSize: 12,
        width: 50,
        textAlign: 'center',
        backgroundColor: Colors.lightOrange,
        height: 'auto',
        textAlignVertical: 'center',
        borderRadius: 20,

    }    
})

export { Nav };