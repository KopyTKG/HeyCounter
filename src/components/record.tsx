/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { View, Text } from "react-native";
import { Drawer } from "../styles/drawer";

export default function Record(prrops: any) {
    return (
        <View style={Drawer.record}>
            <Text style={Drawer.user}> {prrops.user} </Text>
            <Text style={Drawer.date}> {prrops.date} </Text>
            <Text style={Drawer.time}> {prrops.time} </Text>
        </View>
    );
}