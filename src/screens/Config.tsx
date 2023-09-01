import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import styles from '../styles/index';

export default ({navigation}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Help Screen</Text>
    <Button onPress={() => navigation.navigate('Home')} title="Go to Home" />
    <Button onPress={() => navigation.navigate('Invite')} title="Invite" />
  </View>
)
