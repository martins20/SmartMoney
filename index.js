/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Main from './src/Pages/Main';
import NewEntry from './src/Pages/NewEntry';
import Report from './src/Pages/Report';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

AppRegistry.registerComponent(appName, () => Report);
