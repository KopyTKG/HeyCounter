/* eslint-disable keyword-spacing */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Pressable, Text } from "react-native";


export default function Button(props: any) {
    return(
        <Pressable onPress={() => props.onPress()}>
            <Text style={props.style}>
                {props.children}
            </Text>
        </Pressable>
    );
}
