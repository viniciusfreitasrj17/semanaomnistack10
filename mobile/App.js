import React from 'react';
import { StatusBar } from 'react-native';
// import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}











// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7159c1',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 30,
//     color: '#fff'
//   }
// });
