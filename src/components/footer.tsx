/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Linking, Text, View } from 'react-native';
import Components from '../styles/global';
import {VERSION} from '@env';



export default function Footer() {
    return (
        <View style={Components.footer}
        >
            <Text onPress={() => {
                Linking.openURL('https://thekrew.app');
            }}
                style={Components.footerText}
            >
                ({VERSION}) &copy; thekrew.app {new Date().getFullYear()}
            </Text>
        </View>
    );
}
