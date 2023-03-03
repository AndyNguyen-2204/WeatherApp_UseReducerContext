import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
export default function UvIndex({globalState}) {
  return (
    <SafeAreaView style={styles.wrapUvIndex}>
    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
       <Icon name='sun' color={"#ffffff"} size={25} />
       <Text style={{textTransform:"capitalize",color:"#ffffff"}}>Uv index</Text>
       </View>
       <Text style={{fontSize:30,color:"#ffffff",alignSelf:"center",fontWeight:"600"}}>{globalState.state.weatherDetail?globalState.state.weatherDetail.uvi:globalState?.state?.data?.daily[0].uvi}</Text>
       <Text style={{color:"#ffffff",fontWeight:"400"}}>Chỉ số thấp nhấp là 0 và cực đại là 11</Text>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  wrapUvIndex:{
    width:"48%",
    height:158,
    borderWidth:1,
    borderRadius:22,
    borderColor:"#DDA0DD",
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor:"#272251",
    flexDirection:"column",
    justifyContent:"space-between"
  }
})
