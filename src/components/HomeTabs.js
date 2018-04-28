import React from "react";
import {
  Text,
  View,
  StyleSheet, 
  TouchableOpacity
} from "react-native";
import { TabNavigator } from "react-navigation";
import { connect } from "react-redux";
// import PortfolioTab from "./PortfolioTab";
import PortfoliosTab from "./PortfoliosTab";
import UserInfo from "./UserInfo";
import Feed from "./Feed";
import { Colors } from "../constants/styles"
const userScreens = {
  "Info": {screen: UserInfo},
  "Portfolios": {screen: PortfoliosTab},
  "Feed": {screen: Feed},
}

const ResultItem = ({result}) => (
  <View style={resultStyles.resultBox}>
    <View>
      <Text style={resultStyles.heading}>{result.title}</Text>
      <Text style={resultStyles.name}>{result.name}</Text>      
    </View>
    <View><Text>tiny chart</Text></View>
    <View>
      <Text style={resultStyles.price}>{result.price}</Text>
    </View>    
  </View>
)

const resultStyles = StyleSheet.create({
  resultBox: {
    height: 60,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.appWhite,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  name: {
    fontSize: 11,
  },
  price: {
    backgroundColor: Colors.appGreen,
    borderRadius: 5,
    paddingRight: 5,
    paddingLeft: 5,    
    color: Colors.appWhite
  }
})

const PortfolioTab = (props) => {
  debugger
  return (<View>
    <TouchableOpacity onPress={ () => props.screenProps.setSelectedPortfolio('lol') }>
      <ResultItem
        result={{title: "SPOT", name: 'Spotify Technology SA', price: '+3.45%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => props.screenProps.setSelectedPortfolio('lol') }>
      <ResultItem
        result={{title: "TSLA", name: 'Tesla inc', price: '+1.45%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => props.screenProps.setSelectedPortfolio('lol') }>
      <ResultItem
        result={{title: "NASA", name: 'Space inc', price: '+2.45%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => props.screenProps.setSelectedPortfolio('lol') }>
      <ResultItem
        result={{title: "NASCAR", name: 'Bootleg drinks inc', price: '+1.25%'}}
      />
    </TouchableOpacity>
  </View>)
}

const portfolioScreens = {
  "Info": {screen: UserInfo},
  "Assets": {screen: PortfolioTab},
  "Feed": {screen: Feed},
}

const AssetTab = () => <View><Text>Asset shit lol</Text></View>

const assetScreens = {
  "Info": {screen: UserInfo},
  "Stats": {screen: AssetTab},
  "Feed": {screen: Feed},
}

const HomeTabsRouter = (screens) => (
  TabNavigator(screens,{
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
    initialRouteName: Object.keys(screens)[1],    
  })
)


const HomeTabs = (props) => {
  let screens
  if(props.selectedStock){
    screens = assetScreens    
  } else if(props.selectedPortfolio) {
    screens = portfolioScreens
  } else {
    screens = userScreens
  }
  const Stuff = HomeTabsRouter(screens)
  return(
    <View style={{backgroundColor: 'white', borderRadius: 15, marginTop: 5}}>
      <Stuff screenProps={{navigation: props.navigate, setSelectedPortfolio: props.setSelectedPortfolio}}/>
    </View>  
  )
}

const mapStateToProps = (state) => ({
  selectedPortfolio: state.search.selectedPortfolio,
  selectedStock: state.search.selectedStock
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedPortfolio: asset => dispatch({type: 'SET_SELECTED_STOCK', payload: asset})
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeTabs)