import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screen/home/Home';
import { StateProvider } from "./context/store";
import TabBottom from './src/components/navigation/tabBottom/tabBottom';
export default function App() {
  return (
    <StateProvider>
     <TabBottom/>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
