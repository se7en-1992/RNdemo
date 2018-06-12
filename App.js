/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import FlexScreen from './src/pages/FlexScreen';
import FlexBoxScreen from './src/pages/FlexBoxScreen';
import TextInputScreen from './src/pages/TextInputScreen';
import ScrollViewScreen from './src/pages/ScrollViewScreen';


const App = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Flex: {
    screen: FlexScreen
  },
  FlexBox: {
    screen: FlexBoxScreen
  },
  TextInput: {
    screen: TextInputScreen
  }
  ,
  ScrollView: {
    screen: ScrollViewScreen
  }
});

export default App;