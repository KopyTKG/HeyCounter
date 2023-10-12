/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useEffect, useState, useRef } from 'react';
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
} from 'react-native';
import { Sizes, Types } from '../styles/button';
import Components from '../styles/global';
import {API_TOKEN, API_URL} from '@env';
import { Drawer } from '../styles/drawer';
import MessageController from '../controllers/message.controller';
import API from '../controllers/api.controller';
import StorageController from '../controllers/storage.controller';
import Navbar from './navbar.layout';
import Footer from './footer';

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


function MainLayout(props: any) {
  // states
  const [hej, setHej] = useState<any>(0);
  const [memory, setMemory] = useState<any>([]);
  const [user, setUser] = useState<string>('');
  // contollers
  const Message = new MessageController(ToastAndroid.SHORT);
  const api = new API(`${API_URL}/api/hey`, API_TOKEN);
  const storage = new StorageController('user');
  // refs
  const drawer = useRef<DrawerLayoutAndroid>(null);

  
  async function save() {
    let data = (await storage.read());
    setHej(hej + 1);
    await api.post(data);
  }


  async function clean() {
    setHej(0);
    Message.show('Count has been cleared');
  }

  async function logout() {
    storage.delete()
    .catch(e => {
      console.debug(e);
    })
    .then(() => {
      setUser('');
      props.setStatus(false);
      props.setText('');
      Message.show('Logged out');
    });
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
    storage.read()
    .catch(e => {
      console.debug(e);
    })
    .then(data => {
      setUser(data);
    });
    api.get()
    .catch(e => {
      console.debug(e);
    })
    .then(data => {
      setMemory([...data]);
    });
  },[api, memory, storage]);

    return (
      <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={Dimensions.get('screen').width - 80}
      drawerPosition="left"
      renderNavigationView={navigationView}
      >
        <SafeAreaView
        style={Components.body}
        >
          <Navbar
          user={user}
          onPress={logout}
          />
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
              onPress={() => {save();}}
              >
                <Text style={[Types.primary, Sizes.x_large, Components.button]}>
                  Add to count
                </Text>
              </Pressable>
              <Pressable
              onPress={() => {clean();}}
              >
                <Text style={[Types.danger, Sizes.medium, Components.button]}>
                  Clear
                </Text>
              </Pressable>
          </View>
          <Footer />
        </SafeAreaView>
      </DrawerLayoutAndroid>
    );
}

export default MainLayout;
