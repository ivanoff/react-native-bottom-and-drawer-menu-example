/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {CounterContextProvider} from './src/context';

AppRegistry.registerComponent(
  appName,
  () => props =>
    (
      <CounterContextProvider>
        <App {...props} />
      </CounterContextProvider>
    ),
  () => App,
);
