/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { View, Text, Pressable } from "react-native";
import Components from "../styles/global";
import { Nav } from "../styles/nav";
import { Sizes, Types } from "../styles/button";

export default function Navbar(props: any) {
    return(
        <View style={Components.nav}>
            <Text style={Nav.user}>
                {props.user}
            </Text>
            <Pressable onPress={() => props.onPress()}>
                <Text style={[Components.button, Types.secondary, Sizes.small]}>
                    Logout
                </Text>
            </Pressable>
        </View>
    )
}