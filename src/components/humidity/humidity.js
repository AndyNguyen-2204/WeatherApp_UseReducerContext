import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
export default function Humidity({globalState}) {
  return (
    <SafeAreaView style={styles.wrapUvIndex}>
    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
       <Icon name='water' color={"#ffffff"} size={25} />
       <Text style={{textTransform:"capitalize",color:"#ffffff"}}>Humidity</Text>
       </View>
       <Text style={{fontSize:30,color:"#ffffff",alignSelf:"center",fontWeight:"600"}}>{globalState.state.weatherDetail?globalState.state.weatherDetail.humidity:globalState?.state?.data?.daily[0].humidity}%</Text>
       <Text style={{color:"#ffffff",fontWeight:"400"}}>Độ ẩm trong ngày</Text>
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
