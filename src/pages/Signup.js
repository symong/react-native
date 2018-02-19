import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<Props> {
  goBack() {
       Actions.pop();
   }
        render() {
          return(
            <View style={styles.container}>
            <Logo/>
            <Form type="Signup"/>
            <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Vous avez déjà un compte?</Text>
            <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>  Identifiez-vous</Text></TouchableOpacity></View>
            </View>
          )
        }
      }

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#455a64',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  signupTextCont: {
    flexGrow:1,
    alignItems:'flex-end',
    justifyContent:'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
    color:'rgba(255,255,255,0.7)',
    fontSize:16
  },
  signupButton: {
    color:'#fff',
    fontSize:16,
    fontWeight:'500'
  }
})
