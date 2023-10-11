/* eslint-disable prettier/prettier */
import { ToastAndroid } from "react-native";

class MessageController {
    private length: number;
    constructor(lenght: number) {
        this.length = lenght;
    }

    show(text: string) {
        ToastAndroid.show(
            text,
            this.length,
        );
    }
}

export default MessageController;