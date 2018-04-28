import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {connect, dispatch} from 'react-redux'

import { logout } from '../actions/auth'

import CustomButton from '../components/CustomButton'
import { Colors } from '../constants/styles'
type Props = {};

class Settings extends Component<Props> {
  onLogOutPressed = () => {
    this.props.logout()
    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.appGrey}}>
        <View style={styles.container}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 30}}>Settings</Text>
          <View style={styles.settingOptionWrapper}>
            <Text style={styles.settingOption}>Banking</Text><Text style={styles.settingArrow}>></Text>
          </View>
          <View style={{height: 1, width: '100%', backgroundColor: "black"}}/>
          <View style={styles.settingOptionWrapper}>
            <Text style={styles.settingOption}>History</Text><Text style={styles.settingArrow}>></Text>
          </View>
          <View style={{height: 1, width: '100%', backgroundColor: "black"}}/>        
          <View style={styles.settingOptionWrapper}>
            <Text style={styles.settingOption}>General</Text><Text style={styles.settingArrow}>></Text>
          </View>
          <View style={{height: 1, width: '100%', backgroundColor: "black"}}/>        
          <View style={styles.settingOptionWrapper}>
            <Text style={styles.settingOption}>Help</Text><Text style={styles.settingArrow}>></Text>
          </View>
          <View style={{height: 1, width: '100%', backgroundColor: "black"}}/>
          <View style={styles.buttonContainer}>    
            <CustomButton buttonAction={this.onLogOutPressed} buttonText={"Log out"}/>
          </View>
        </View>
      </View>
    );
  }
}

mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({type: "LOGOUT"})
})

export default connect(null, mapDispatchToProps)(Settings)

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,    
    flex: 1,
    padding: 15,
    paddingTop: 0,
    backgroundColor: Colors.appWhite,
  },
  settingOption: {
    fontSize: 16,
    paddingLeft: 5,
    marginBottom: 10,
    marginTop: 10,    
  },
  settingArrow: {
    color: Colors.appGreen,
    fontSize: 22,
    paddingTop: 6,
    fontWeight: 'bold'
  },
  settingOptionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  }
});
