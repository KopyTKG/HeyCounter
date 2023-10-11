/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from './vars';

const Drawer = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightBlack ,
        width: Dimensions.get('screen').width-80,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center'
    },
    scroller: {
        marginTop: 5,
    },
    record: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',

    },

});

export { Drawer };
