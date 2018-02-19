import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Logo extends Component<Props> {
  constructor(props){
    super(props)
  }
  render() {

  return(
    <View style={styles.container}>
    <TextInput style={styles.inputBox}
    underlineColorAndroid='rgba(0,0,0,0)'
    placeholder="E-mail"
    placeholderTextColor = "#fff"
    selectionColor="#fff"
    secureTextEntry={true}
    autoCorrect={false}
    keyboardType="email-address"
    onSubmitEditing={()=> this.password.focus()}/>

    <TextInput style={styles.inputBox}
    underlineColorAndroid='rgba(0,0,0,0)'
    placeholder="Mot de passe"
    secureTextEntry={true}
    placeholderTextColor = "#ffffff"
    ref={(input) => this.password = input}/>
    <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>{this.props.type}</Text>
    </TouchableOpacity>
    </View>
  )
}
}


const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255,255,255, 0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#fff',
    marginVertical: 8
  },

  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff'
  },
  button:{
    width:300,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical:10,
    alignItems:'center',
    paddingVertical:13,
  }

})
