import React from 'react';
import { Image, View, Text } from 'react-native';
import { 
  addNavigationHelpers, 
  StackNavigator, 
  TabNavigator, 
  TabBarBottom 
} from 'react-navigation';

import { connect } from 'react-redux';
import Main from '../screens/Main';
import Home from '../screens/Home';
import Market from '../screens/Market';
import Settings from '../screens/Settings';
import Search from '../screens/Search';
import LeaderBoard from '../screens/LeaderBoard';
import Login from '../screens/Login';
import Register from '../screens/Register';
import CreatePortfolio from '../screens/CreatePortfolio';
import AssetSearch from '../screens/AssetSearch';
import BuyAsset from '../screens/BuyAsset'
import ChoosePortfolio from '../screens/ChoosePortfolio';

import UserInfo from '../components/UserInfo';
import Feed from '../components/Feed';
import PortfoliosTab from '../components/PortfoliosTab';
import PortfolioTab from '../components/PortfolioTab';
import AssetTab from '../components/AssetTab';

export const UserScreens = {
  'Info': {screen: UserInfo},
  'Portfolios': {screen: PortfoliosTab},
  'Feed': {screen: Feed},
}

export const PortfolioScreens = {
  'Info': {screen: UserInfo},
  'Assets': {screen: PortfolioTab},
  'Feed': {screen: Feed},
}

export const AssetScreens = {
  'Info': {screen: UserInfo},
  'Stats': {screen: AssetTab},
  'Feed': {screen: Feed},
}

export const HomeTabsRouter = (screens) => (
  TabNavigator(screens,{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        return(
          <View style={focused ? {borderBottomColor: 'black', borderBottomWidth: 2} : null}>
            <Text
              style={{
                paddingLeft: 15, paddingRight: 15,
                fontSize: focused ? 21 : 18,
                fontWeight: 'bold',
              }}>
              {routeName}
            </Text>
          </View>
        )
      }
    }),
    tabBarPosition: 'top',
    tabBarOptions: {
      style: {
        height: 40,
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1.0,
        backgroundColor: 'white',
      },
      indicatorStyle: {
        borderBottomColor: 'red',
        borderBottomWidth: 2,
      },
      showLabel: false,
    },
    swipeEnabled: true,
    lazy: true,
    initialRouteName: Object.keys(screens)[1],    
  })
)

export const appStack = TabNavigator({
  Settings: { screen: Settings },
  Home: { screen: Home },
  Search: { screen: Search },
  Market: { screen: Market },
  LeaderBoard: { screen: LeaderBoard },
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;

      if (routeName === 'Home') {
        if(!focused) {
          return <Image 
            style={{width: 20, height: 20}}
            source={require('../../Icons/Home.png')}
          />
        } else {
          return <Image 
            style={{width: 20, height: 20}}
            source={require('../../Icons/HomeSelected.png')}
          />
        }
      } else if (routeName === 'Settings') {
        if(!focused) {
          return <Image 
            style={{width: 20, height: 20}}
            source={require('../../Icons/Settings.png')}
          />
        } else {
          return <Image 
            style={{width: 20, height: 20}}
            source={require('../../Icons/SettingsSelected.png')}
          />
        }
      } else if (routeName === 'Market') {
        if(!focused) {
          return <Image 
            style={{width: 20, height: 20}}
            source={require('../../Icons/Market.png')}
          />
        } else {
          return <Image 
            style={{width: 20, height: 20}}
            source={require('../../Icons/MarketSelected.png')}
          />
        }
      } else if (routeName === 'LeaderBoard') {
        if(!focused) {
          return <Image 
            style={{width: 20, height: 20}}
            source={require('../../Icons/Leaderboard.png')}
          />
        } else {
          return <Image 
            style={{width: 20, height: 20}}
            source={require('../../Icons/LeaderboardSelected.png')}
          />
        }
      } else if (routeName === 'Search') {
        if(!focused) {
          return <Image 
            style={{width: 20, height: 20}}
            source={require('../../Icons/Search.png')}
          />
        } else {
          return <Image 
            style={{width: 20, height: 20}}
            source={require('../../Icons/SearchSelected.png')}
          />
        }
      }
    },
  }),
  tabBarOptions: {
    style: {
      height: 50,
      paddingTop: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 4,
      shadowOpacity: 1.0,
      backgroundColor: 'white',
    },
    activeTintColor: 'rgb(65,65,67)',
    inactiveTintColor: 'rgba(65,65,67,0.8)',
  },
  initialRouteName: "Home",
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
})

export const AppNavigator = StackNavigator({
  Main: { screen: Main },
  Login: { screen: Login },
  Register: { screen: Register },
  App: { screen: appStack},
  CreatePortfolio: {screen: CreatePortfolio},
  AssetSearch: {screen: AssetSearch},
  BuyAsset: {screen: BuyAsset},
  ChoosePortfolio: {screen: ChoosePortfolio},
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    initialRouteName: 'Main',
    style: {
      backgroundColor: 'dark-grey'
    }
});

export default AppNavigator;