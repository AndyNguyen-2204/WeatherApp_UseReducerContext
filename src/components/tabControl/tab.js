import React, { useContext } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { store } from '../../../context/store';
export default function Tab({ content, setValueTab, valueTab }) {
  return (
    <SafeAreaView style={{ paddingBottom: 10, borderBottomWidth: 2, borderColor: "#FFF5EE" }}>
      <FlatList
        data={content}
        renderItem={({ item }) =>
          <TouchableOpacity key={item.value} onPress={() => setValueTab(item.value)}>
            <Text style={[styles.title, valueTab === item.value && styles.active]}>{item.title}</Text>
          </TouchableOpacity>}
        keyExtractor={item => item.value}
        horizontal={true}
        contentContainerStyle={{ width: "100%", justifyContent: "space-between", paddingHorizontal: 12 }}
      />

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  title: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 22
  },
  active: {
    color: "#ffffff"
  }
})
