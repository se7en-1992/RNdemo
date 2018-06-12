/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import FlexScreen from './src/pages/FlexScreen';
import FlexBoxScreen from './src/pages/FlexBoxScreen';


const App = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Flex: {
    screen: FlexScreen
  },
  FlexBox: {
    screen: FlexBoxScreen
  }
});

export default App;