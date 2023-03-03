import moment from 'moment'
import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
export default function Wind({globalState}) {
  return (
    <SafeAreaView style={styles.wrapUvIndex}>
    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
       <Icon name='wind' color={"#ffffff"} size={25} />
       <Text style={{textTransform:"capitalize",color:"#ffffff"}}>Wind</Text>
       </View>
       <Text style={{fontSize:20,color:"#ffffff",alignSelf:"center",marginTop:35}}>{globalState.state.weatherDetail?globalState.state.weatherDetail.wind_speed:globalState.state.data.daily[0].wind_speed} km/h</Text>
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
  }
})
