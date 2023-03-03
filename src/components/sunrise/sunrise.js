import moment from 'moment'
import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
export default function Sunrise({globalState}) {
  return (
    <SafeAreaView style={styles.wrapUvIndex}>
    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
       <Icon name='sun' color={"#ffffff"} size={25} />
       <Text style={{textTransform:"capitalize",color:"#ffffff"}}>Sunrise-Sunset</Text>
       </View>
       <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
        <Icon name="sunrise" color="#ffffff" size={25}/>
        <Text style={{fontSize:20,color:"#ffffff"}}>{globalState.state.weatherDetail?moment.unix(globalState.state.weatherDetail.sunrise).format('LT'):moment.unix(globalState.state.data.daily[0].sunrise).format('LT')}</Text>
       </View>
       <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
        <Icon name="sunset" color="#ffffff" size={25}/>
        <Text style={{fontSize:20,color:"#ffffff"}}>{globalState.state.weatherDetail?moment.unix(globalState.state.weatherDetail.sunset).format('LT'):moment.unix(globalState.state.data.daily[0].sunset).format('LT')}</Text>
       </View>
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
