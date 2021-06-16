import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';

import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-ico-font-awesome';
//import Icon3 from 'react-native-ico-flags';

import Home from './pages/HomeScreen';
import Explore from './pages/ExploreScreen';
import Setting from './pages/SettingScreen';
import SScreen1 from './pages/SScreen1';
import SScreen2 from './pages/SScreen2';
import SScreen3 from './pages/SScreen3';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const opt = {
  Home,
  Explore,
  Setting,
  SScreen1,
  SScreen2,
  SScreen3,
};

const bt = ['Home', 'Explore', 'Setting'];
const lm = ['Home', 'Explore', 'SScreen1', 'SScreen2', 'Setting'];

const icons = {
  Home: 'home',
  Explore: 'magnifying-glass',
  Setting: 'settings',
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = icons[route.name] || '';
//return <Icon3 name="united-kingdom" />
          return <Icon name={iconName} color={color} size={size}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'slateblue',
        inactiveTintColor: 'gray',
      }}    
    >
      {
        Object.keys(opt).map((key, i) => <Tab.Screen key={i} name={key} component={opt[key]} options={bt.includes(key) ? {} : {tabBarButton: () => <></>}}/>)
      }
    </Tab.Navigator>
  );
}

const DrawerMenu = ({navigation}) => <ScrollView><View>
  {
    lm.map((key, i) => {
      const aaa = () => navigation.navigate(key);
      return <TouchableOpacity key={i} onPress={aaa.bind(this)}>
        <Text>{key}</Text>
      </TouchableOpacity>;
    })
  }
</View></ScrollView>

const SStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MyTabs"
      component={MyTabs}
      options={({navigation, route}) => ({
        title: 'Menu Example',
        headerLeft: () => (
          <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
            <Icon name="reorder-option" />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#103353'
        },
        headerTintColor: '#fff',
      })}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  return <NavigationContainer>
    <Drawer.Navigator drawerContent={DrawerMenu} >
      <Drawer.Screen name="SStack" component={SStack} />
    </Drawer.Navigator>
  </NavigationContainer>
}

const App = () => {return Navigation()}

export default App;

/*
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const DrawerStack = () => (
      <Drawer.Navigator drawerContent={DrawerMenu} >
        <Drawer.Screen
          name="MyTabs"
          component={MyTabs}
        />
      </Drawer.Navigator>
    );


    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerStack"
          component={DrawerStack}
          options={({}) => ({
            title: 'Setting',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
    const navigation = useNavigation(); 
                  navigation.dispatch(DrawerActions.toggleDrawer());
                }}>
                <Text>0000</Text>
              </TouchableOpacity>
            ),
            headerStyle: { backgroundColor: '#f00' },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;
*/