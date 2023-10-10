/* eslint-disable prettier/prettier */

import React, { useState} from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from './styles/vars';
import { Sizes, Types } from './styles/button';
import Components, { Flex } from './styles/global';
import Button from './components/Button';
import {API_TOKEN, API_URL} from '@env';


const styles = StyleSheet.create({
  title: {
    width: 'auto',
    height: 'auto',
    fontSize: 40,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  buttonView: {
    width: Dimensions.get('screen').width,
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  count: {
    width:  Dimensions.get('screen').width,
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 50,
  },
  countText: {
    fontSize: 50,
    width:150,
    textAlign: 'center',
    color: 'lightblue',
  },
});

function App(): JSX.Element {
  const [hej, setHej] = useState<any>(0);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lightBlack : Colors.darkWhite,
    height: Dimensions.get('screen').height,
  };

  function Message(text: string) {
    ToastAndroid.show(
      text,
      ToastAndroid.SHORT,
    );
  }

  async function save() {
    await fetch(`${API_URL}/api/hey`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization : `Bearer ${API_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify({
        data: String(hej)
      })
    });
    Message('Count has been saved to database');
  }

  async function load() {
    let raw = await fetch(`${API_URL}/api/hey`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization : `Bearer ${API_TOKEN}`,
      },
      method: "GET",
    });
    let data: any = await raw.json();
    if (data.count) {
      let date = new Date(data.createdAt);
      setHej(Number(data.count));
      Message(`Loaded count ${data.count} from \n ${date.toDateString()}`);
    }
  }

  async function clean() {
    setHej(0);
    Message('Count has been cleared');
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={[Components.header, Flex.end]}>
        <Button style={[Types.secondary, Sizes.smaller, Components.button]} onPress={() => save()}>
          save
        </Button>
      </View>
      <View>
        <Text style={styles.title}> THE ULTIMATE 'HEJ'! COUNTER </Text>
      </View>
      <View style={styles.count}>
          <Text style={styles.countText}>
            {hej}
          </Text>
      </View>
      <View style={styles.buttonView}>
          <Pressable
          onPress={() => {setHej(hej+1)}}
          >
            <Text style={[Types.primary, Sizes.x_large, Components.button]}>
              Add to count
            </Text>
          </Pressable>
          <Pressable
          onPress={() => {load()}}
          >
            <Text style={[Types.warning, Sizes.medium, Components.button]}>
              load
            </Text>
          </Pressable>
          <Pressable
          onPress={() => {clean()}}
          >
            <Text style={[Types.danger, Sizes.medium, Components.button]}>
              Clear
            </Text>
          </Pressable>
      </View>
    </SafeAreaView>
  );
}
export default App;
