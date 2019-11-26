import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { View, TouchableWithoutFeedback } from 'react-native';

export default function BottomTabNavigator (stack) {
  return createBottomTabNavigator(stack,{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    },
    defaultNavigationOptions: () => ({
      tabBarButtonComponent: CustomTabButton,
    }),
  });
}

class CustomTabButton extends React.Component {
  render() {
    const {
      onPress,
      onLongPress,
      testID,
      accessibilityLabel,
      ...props
    } = this.props;

    if (testID === 'hidden') return null;

    return <TouchableWithoutFeedback onPress={onPress} onLongPress={onLongPress} testID={testID} accessibilityLabel={accessibilityLabel}>
        <View {...props} />
      </TouchableWithoutFeedback>;
  }
}
