import React, {Component, useContext} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from '../styles/index';
import AppContext from '../context';

export default () => {
  const basketNumbers = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List {basketNumbers?.[0].number}</Text>
    </View>
  );
}
