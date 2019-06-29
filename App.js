  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow
   */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FirstComponent from './FisrtComponent';
  export default class App extends Component{

    constructor(props){
      super(props);
      this.state={
        name: 'VIGNESH'
      }
    }

    render() {
      return (
        <View style={styles.parentContainer}>
          <View style={styles.container1}>
            <View>
              <Text style={styles.welcome}>Hello Vignesh From One..!!</Text>
              <Text style={styles.welcome}>Hello {this.state.name}</Text>
            </View>
            <View>
              <Text style={styles.welcome}>Hello Vignesh From Two..!!</Text>
              <Text style={styles.welcome}>Hello {this.state.name}</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <FirstComponent/>
          </View>
          <View style={styles.container3}>
            <Text>Hello FRom 3</Text>
          </View>
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    parentContainer: {
      flexDirection: 'column',
      backgroundColor: 'grey',
      flex:1
    },
    container1: {
      // flex: 2,
      flexDirection: 'row',
      height:200,
      width: 200,
      backgroundColor: 'pink',
    },
    container2: {
      // flex: 2,
      flexDirection: 'row',
      height:200,
      backgroundColor: 'red',
    },
    container3: {
      // flex: 2,
      flexDirection: 'row',
      height:50,
      backgroundColor: 'grey',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'blue'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
