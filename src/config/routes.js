import React from 'react';
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

export const appStack = TabNavigator({
  Home: { screen: Home },
  Market: { screen: Market },
  LeaderBoard: { screen: LeaderBoard },
  Search: { screen: Search },
  Settings: { screen: Settings },
},{
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
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
  Home: { screen: Home },
  
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    initialRouteName: 'Home',
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