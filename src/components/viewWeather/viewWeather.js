import moment from 'moment'
import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image } from "react-native"
import { ativeViewWeather} from "./functionHelper"
export default function ViewWeather({ data, valueTab,handelGetDetail}) {

  return (
    <TouchableOpacity style={[styles.wrapViewWeather, ativeViewWeather(data.dt, valueTab) ? styles.active : ""]} onPress={()=>handelGetDetail(data,valueTab)}>
      <Text style={styles.topContent}>{valueTab === 1 ? moment.unix(data.dt).format('LT') : moment.unix(data.dt).format('DD-MM')}</Text>
      <Text>
       <Image style={{height:30,width:50}} source={{uri:`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}}/>
      </Text>
      <Text style={styles.botContent}>{valueTab === 1 ? Math.round(data.temp) : Math.round(data.temp.day)}°</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  wrapViewWeather: {
    width: 85,
    borderRadius: 30,
    height: 146,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 33,
    borderWidth: 1,
    borderColor: "#FFDEAD",
    marginRight: 12
  },
  active: {
    backgroundColor: "#48319D"
  },
  topContent: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 22,
    color: "#ffffff",
    letterSpacing: -0.408,
    marginTop: 11
  },
  botContent: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 22,
    color: "#ffffff",
    letterSpacing: -0.408,
    marginBottom: 20
  }
})
