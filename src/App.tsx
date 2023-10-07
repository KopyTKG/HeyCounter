/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
  const [hey, setHey] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lightBlack : Colors.darkWhite,
    height: Dimensions.get('screen').height,
  };

  function saveMessage() {
    ToastAndroid.show(
      "Counter has been saved",
      ToastAndroid.SHORT,
    );
  }

  function save() {
    console.log(`saving hey count: ${hey}`);
    saveMessage();
  }

  function load() {
    console.log('loading todays count');
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={[Components.header, Flex.end]}>
        <Button style={[Types.secondary, Sizes.smaller, Components.button]} onPress={() => save()}>
          save
        </Button>
      </View>
      <View>
        <Text style={styles.title}> THE ULTIMATE HEY! COUNTER </Text>
      </View>
      <View style={styles.count}>
          <Text style={styles.countText}>
            {hey}
          </Text>
      </View>
      <View style={styles.buttonView}>
          <Pressable
          onPress={() => {setHey(hey+1)}}
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
      </View>
    </SafeAreaView>
  );
}
export default App;
