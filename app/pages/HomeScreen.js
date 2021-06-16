// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import {createDrawerNavigator, DrawerActions} from '@react-navigation/drawer';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Home Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('Setting')}
            title="Go to Setting Screen"
          />
          <Button
            onPress={() => navigation.navigate('Explore')}
            title="Go to Explore Screen"
          />
          <Button
            onPress={() => navigation.navigate('SScreen1')}
            title="Go to SScreen1"
          />
          <Button
            onPress={() => navigation.navigate('SScreen2')}
            title="Go to SScreen2"
          />
          <Button
            onPress={() => navigation.navigate('SScreen3')}
            title="Go to SScreen3"
          />
          <Button
            onPress={() => //navigation.dispatch(DrawerActions.toggleDrawer())
                            navigation.openDrawer()}
            title="Menu menu"
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          React Navigate Drawer with Bottom Tab
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
