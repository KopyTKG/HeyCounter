/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */

import React from 'react';
import { useEffect, useState, useRef} from 'react';
import StorageController from './controllers/storage.controller';
import MainLayout from './components/app.layout';
import { Pressable, SafeAreaView, Text, TextInput, View, ToastAndroid } from 'react-native';
import { Sizes, Types } from './styles/button';
import Components, { Login } from './styles/global';
import MessageController from './controllers/message.controller';
import Footer from './components/footer';

function App(): JSX.Element {
  const [loggedIn, setStatus] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const Message = new MessageController(ToastAndroid.SHORT);
  const storage = new StorageController('user');

  async function login() {
    if (text === '') {
      Message.show('Please enter a username');
      return setStatus(false);
    } else {
      storage.write(text)
      .catch(e => {
        console.debug(e);
      })
      .then(() => {
        setStatus(true);
        Message.show('Logged in as ' + text);
      })
    }
  }


  useEffect(() => {
    storage.validate()
    .catch(e => {
      console.debug(e);
    })
    .then(status => {
      if (status) {
        setStatus(status);
      }
    })

  }, [loggedIn]);

  if (loggedIn) {
    return (
      <MainLayout 
       setStatus={setStatus}
       setText={setText}
      />
    );
  } else {
    return (
      <SafeAreaView style={[Components.body]}>
        <View>
          <Text style={Components.title}>
          THE ULTIMATE 'HEJ'! COUNTER 
          </Text>
          <Text style={Components.subtitle}>
            Keep track of how many times he sais 'hej'!
          </Text>
        </View>
        <View style={Components.login}>
          <Text style={Login.title}>
            Select your username
          </Text>
          <TextInput 
            placeholder='username' 
            value={text} 
            onChangeText={setText}
            editable={true} 
            keyboardType='default'
            style={Components.input}
            />
          <Pressable onPress={() => {
            login();
          }}
          >
            <View>
              <Text
              style={[Components.button, Types.primary, Sizes.medium]}
              > Login </Text>
            </View>
          </Pressable>
        </View>
      <Footer />
      </SafeAreaView>
    );
  }
}
export default App;
