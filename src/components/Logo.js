import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component<Props> {
  render() {
  return(
    <View style={styles.container}>
    <Image
    style={{width:200, height:100}}
    source={require('../images/logo.png')} />
    <Text style={styles.logoText}>Créateurs d&apos;expériences humaines</Text>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  logoText: {
    fontSize:18,
    marginVertical:10,
    color:'rgba(255, 255, 255, 0.7)'
  }
})
