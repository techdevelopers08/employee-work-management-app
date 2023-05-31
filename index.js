/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { isLogBoxErrorMessage } from 'react-native/Libraries/LogBox/Data/LogBoxData';


import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()

AppRegistry.registerComponent(appName, () => App);
