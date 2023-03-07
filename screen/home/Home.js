import React, { useContext, useState } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import HourlyForecast from "../../src/components/hourlyForecast/index"
import { store } from "../../context/store"
import { debounce } from 'lodash';
export default function Home() {
  const globalState = useContext(store);
  const [city, setCity] = useState("Ha noi")
  const [err,setErr]=useState("")
  const updateCity=text=>setCity(text)
  const debounceOnchange=debounce(updateCity,1000)
  return (
    <SafeAreaView style={styles.wrapHomeScreen}>
      <Image source={require("../../assets/homeImg/morning.jpeg")} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
      <View style={styles.wrapContent}>
      <TextInput style={styles.textinput} placeholder="Nhập thành phố ....." onChangeText={debounceOnchange}/>
      <Text style={{fontSize:20,fontWeight:"700",color:"#B22222",alignSelf:"center"}}>{(err !== "" && city !== "") && err}</Text>
        <View style={styles.topContent}>
          <Text style={styles.title}>{globalState?.state?.city}</Text>
          <Text style={styles.temperature}>{Math.round(globalState?.state?.data?.current.temp)}°</Text>
          <Text style={styles.weather}>{globalState?.state?.data?.current.weather[0].description}</Text>
        </View>
        <View style={styles.botContent}>
          <HourlyForecast city={city} setErr={setErr}/>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapHomeScreen: {
    position: "relative",
  },
  textinput:{
    height:50,
    width:"80%",
    borderWidth:1,
    borderColor:"#00008B",
    alignSelf:"center",
    borderRadius:10,
    alignSelf:"center",
    marginTop:20,
    paddingHorizontal:15,
 },
  wrapContent: {
    position: "absolute",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topContent: {
    alignSelf: "center",
    marginTop: 28,
    width:"100%",
    textAlign:"center"
  },
  title: {
    fontWeight: "400",
    fontSize: 34,
    lineHeight: 41,
    textAlign:"center",
    color:"#000000"
  },
  temperature: {
    fontSize: 96,
    lineHeight: 96,
    letterSpacing: 0.37,
    fontWeight: "400",
    marginTop: 12,
    textAlign:"center",
     color:"#000000"
  },
  weather: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    textTransform: "capitalize",
    textAlign:"center",
     color:"#000000"
  },
  botContent: {
    height: 280
  }
})
