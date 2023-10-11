/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageController {
    private key: string;
    constructor(key: string) {
        this.key = key;
    }

    public async write(data: string) {
        try {
            await AsyncStorage.setItem(this.key, data);
        } catch (e) {
            console.debug(e);
        }
    }

    public async read(): Promise<any> {
        try {
            const data = await AsyncStorage.getItem(this.key);
            return data;
        } catch (e) {
            console.debug(e);
            return null;
        }
    }

    public async delete() {
        try {
            await AsyncStorage.removeItem(this.key);
        } catch (e) {
            console.debug(e);
        }
    }

    public async validate(): Promise<boolean> {
        try {
            const data = await AsyncStorage.getItem(this.key);
            if (data === null) {
                return false;
            } else {
                return true;
            }
        } catch (e) {
            console.debug(e);
            return false;
        }
    }
}

export default StorageController;
