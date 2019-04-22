import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { 
  createBottomTabNavigator, 
  createMaterialTopTabNavigator, 
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Decks from './Components/Decks'
import NewDeck from './Components/NewDeck'
import DeckDetails from './Components/DeckDetails'
import NewCard from './Components/NewCard'
import Quiz from './Components/Quiz'
import { purple, white, black } from './utils/colors'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { clearLocalNotification , setLocalNotification } from './utils/helpers'


const RouteConfigs = {
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
        tabBarLabel: 'NEW DECK',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
      }
  },
};

  
const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};

const Tabs = Platform.OS === "ios"
    ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
    : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

const MainNavigator = createStackNavigator({
  home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  Decks: {
    screen: Decks,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerTitle: 'Deck Details',
      headerStyle: {
        backgroundColor: black,
      },
    }),
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerTitle: 'Add card',
      headerStyle: {
        backgroundColor: black,
      },
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerTitle: 'Quiz',
      headerStyle: {
        backgroundColor: black,
      },
    }),
  },

});
    

const TabsContainer = createAppContainer(MainNavigator)

export default class App extends React.Component {

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification)
  }
  render() {
    return (
      <Provider store={createStore(reducer, middleware )}>
        <View style={styles.container}>
          <TabsContainer />
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 