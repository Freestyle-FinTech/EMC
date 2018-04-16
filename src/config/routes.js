import React from 'react';
import {Image} from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { connect } from 'react-redux';
import Main from '../screens/Main';
import Home from '../screens/Home';
import Market from '../screens/Market';
import Settings from '../screens/Settings';
import Search from '../screens/Search';
import LeaderBoard from '../screens/LeaderBoard';
import Login from '../screens/Login';
import Register from '../screens/Register';
import CreatePortfolio from '../screens/CreatePortfolio'

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
            style={{width: 25, height: 25}}
            source={require('../../Icons/Home.png')}
          />
        } else {
          return <Image 
            style={{width: 25, height: 25}}
            source={require('../../Icons/HomeSelected.png')}
          />
        }
      } else if (routeName === 'Settings') {
        if(!focused) {
          return <Image 
            style={{width: 25, height: 25}}
            source={require('../../Icons/Settings.png')}
          />
        } else {
          return <Image 
            style={{width: 25, height: 25}}
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
            style={{width: 25, height: 25}}
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
  PortfolioCreate: {screen: CreatePortfolio},
  // Home: { screen: Home },
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    initialRouteName: 'Main',
});

export default AppNavigator;
// const AppWithNavigationState = ({ dispatch, nav }) => (
//   <AppNavigator
//     navigation={addNavigationHelpers({ dispatch, state: nav })}
//   />
// );

// const mapStateToProps = state => ({
//   nav: state.nav,
// });
  
// export default connect(mapStateToProps)(AppWithNavigationState);