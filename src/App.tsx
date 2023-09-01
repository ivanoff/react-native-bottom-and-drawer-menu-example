import * as React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CounterContext} from './context';

import Home from './screens/Home';
import About from './screens/About';
import Config from './screens/Config';
import List from './screens/List';
import Empty from './screens/Empty';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const opt = {
  Home,
  List,
  Profile: Empty,
  Invite: Empty,
  Config,
  About,
};

const MyTabs = () => (
  <Tab.Navigator
    backBehavior="history"
    screenOptions={({route}) => ({
      // tabBarIcon: ({ color, size }) => {
      //   const iconName = icons[route.name] || '';
      //   return <Icon name={iconName} color={color} size={size}/>;
      // },
      headerShown: false,
      tabBarActiveTintColor: '#ff0000',
      tabBarInactiveTintColor: 'gray',
    })}>
    {Object.keys(opt).map((key, i) => (
      <Tab.Screen
        key={i}
        name={key}
        component={opt[`${key}`]}
        options={
          ['Home', 'Profile', 'About'].includes(key)
            ? {}
            : {tabBarButton: () => <></>}
        }
      />
    ))}
  </Tab.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="MyTabs" component={MyTabs} />
  </Stack.Navigator>
);

const DrawerMenu = ({navigation}) => (
  <ScrollView>
    <View>
      {Object.keys(opt).map((key, i) => {
        const aaa = () => navigation.navigate(key);
        return (
          <TouchableOpacity key={i} onPress={aaa.bind(this)}>
            <Text>{key}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  </ScrollView>
);

function App() {
  const {t} = React.useContext(CounterContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={DrawerMenu}>
        <Drawer.Screen name={t('Home Page')} component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
