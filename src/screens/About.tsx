import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';

import { CounterContext } from '../context';

import styles from '../styles/index';
// import t from '../lang';

export default ({navigation}) => (
  <CounterContext.Consumer>
    {({ t, theme, setTheme, count, increment, decrement }) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{t('Help Screen')}</Text>
        <Text>{`${theme} theme`}</Text>
        <Button title="Light" onPress={() => setTheme('light')} />
        <Button title="Dark" onPress={() => setTheme('dark')} />

        <Text>{`Clicked ${count} times! ${theme}`}</Text>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
        <Button onPress={() => navigation.navigate('Home')} title="Go to Home" /><Button onPress={() => navigation.navigate('Invite')} title="Invite" />
      </View>
    )}
  </CounterContext.Consumer>
);
