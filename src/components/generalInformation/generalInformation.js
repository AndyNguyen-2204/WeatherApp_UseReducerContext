import React from 'react'
import {StyleSheet, Text, View} from "react-native"
import Icon from 'react-native-vector-icons/Entypo'
export default function GeneralInformation({globalState}) {
  return (
    <View style={styles.generalInformation}>
       <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
       <Icon name='info-with-circle' color={"#ffffff"} size={25} />
       <Text style={{textTransform:"capitalize",color:"#ffffff"}}>general Information</Text>
       </View>
       <View style={{flexDirection:"row",flexWrap:"wrap",gap:10,marginTop:20}}>
        <Text style={styles.textInfo}>Nhiệt độ ban ngày : {globalState.state.weatherDetail?Math.round(globalState.state.weatherDetail.temp.morn):Math.round(globalState.state.data.daily[0].temp.morn)}°</Text>
        <Text style={styles.textInfo}>Độ ẩm : {globalState.state.weatherDetail?globalState.state.weatherDetail.humidity:globalState.state.data.daily[0].humidity}%</Text>
        <Text style={styles.textInfo}>Áp lực : {globalState.state.weatherDetail?globalState.state.weatherDetail.pressure:globalState.state.data.daily[0].pressure} hPa</Text>
        <Text style={styles.textInfo}>Nhiệt độ về đêm : {globalState.state.weatherDetail?Math.round(globalState.state.weatherDetail.temp.night):Math.round(globalState.state.data.daily[0].temp.night)}°</Text>
        <Text style={styles.textInfoo}>Nhiệt độ trung bình ngày : {globalState.state.weatherDetail?Math.round(globalState.state.weatherDetail.temp.day):Math.round(globalState.state.data.daily[0].temp.day)}°</Text>
       </View>
      </View>
  )
}
const styles=StyleSheet.create({
  generalInformation:{
    width:"100%",
    backgroundColor:"#272251",
    height:158,
    borderWidth:1,
    borderRadius:22,
    borderColor:"#DDA0DD",
    paddingHorizontal:10,
    paddingTop:10
  },
  textInfo:{
    width:"48%",
    color:"#ffffff"
  },
  textInfoo:{
    width:"100%",
    color:"#ffffff"
  }
})