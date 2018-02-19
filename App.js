import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import Routes from './src/Routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Routes/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#455a64',
    alignItems:'center',
    justifyContent:'center'
  },
});
