/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */

import React, { useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  DrawerLayoutAndroid,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from './styles/vars';
import { Sizes, Types } from './styles/button';
import Components from './styles/global';
import {API_TOKEN, API_URL} from '@env';
import { Drawer } from './styles/drawer';


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
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [hej, setHej] = useState<any>(0);
  const [memory, setMemory] = useState<any>([]);


  function Message(text: string) {
    ToastAndroid.show(
      text,
      ToastAndroid.SHORT,
    );
  }

  async function save() {
    setHej(hej + 1);

    await fetch(`${API_URL}/api/hey`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization : `Bearer ${API_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify({})
    });
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
    if (data) {
      let date = new Date(data.createdAt);
      setHej(Number(data.count));
      Message(`Loaded count ${data.count} from \n ${date.toDateString()}`);
    }
  }

  async function clean() {
    setHej(0);
    Message('Count has been cleared');
  }

  const navigationView = () => (
    <View style={Drawer.container}>
      <Text style={Drawer.title}> Data view</Text>
      <ScrollView contentContainerStyle={Drawer.scroller}>
        {memory.map((row: { id: React.Key | null | undefined; createdAt: string | number | Date; count: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) : any => {
          return (
            <View style={Drawer.record} key={row.id}>
              <Text>{new Date(row.createdAt).toDateString()}</Text>
              <Text style={Drawer.time}>{new Date(row.createdAt).toTimeString()}</Text>
            </View>
          );
        })
        }
      </ScrollView>
    </View>
  );


  useEffect(() => {
    fetch(`${API_URL}/api/hey`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization : `Bearer ${API_TOKEN}`,
      },
      method: "GET",
    })
    .catch(e => {
      console.debug(e);
    }).then(raw => raw.json())
    .then((data) => {
      setMemory([...data]);      
    })

    
  }, [memory])
  return (
    <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={Dimensions.get('screen').width - 80}
    drawerPosition='left'
    renderNavigationView={navigationView}
    >
      <SafeAreaView
      style={Components.body}
      >
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
            onPress={() => {save()}}
            >
              <Text style={[Types.primary, Sizes.x_large, Components.button]}>
                Add to count
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
    </DrawerLayoutAndroid>
  );
}
export default App;
