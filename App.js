import React from 'react';
import { Text, View } from 'react-native';
import { Header } from './src/components/common/Header';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}