import React from "react";
import {
  Text,
  View,
  StyleSheet, 
  TouchableOpacity
} from "react-native";
import { TabNavigator } from "react-navigation";

import PortfolioTab from "./PortfolioTab";
import UserInfo from "./UserInfo";
import Feed from "./Feed";

const HomeTabsRouter = TabNavigator({
  "Info": {screen: UserInfo},
  "Portfolios": {screen: PortfolioTab},
  "Feed": {screen: Feed},
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      return(
        <Text
          style={{
            paddingLeft: 15, paddingRight: 15,
            fontSize: focused ? 21 : 18,
            fontWeight: 'bold'
          }}>
          {routeName}
        </Text>
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
  initialRouteName: "Portfolios",    
})

export default HomeTabs = (props) => (
  <View style={{backgroundColor: 'white', borderRadius: 15, marginTop: 5}}>
    <HomeTabsRouter screenProps={props.navigate}/>
  </View>  
)