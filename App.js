/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import DetailScreen from './src/pages/DetailScreen';


const App = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  }
});

export default App;