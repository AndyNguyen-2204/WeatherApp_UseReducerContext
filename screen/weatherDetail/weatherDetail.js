import React, { useContext } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { store } from '../../context/store';
import Icon from 'react-native-vector-icons/Entypo'
import GeneralInformation from '../../src/components/generalInformation/generalInformation';
import UvIndex from '../../src/components/uvIndex/uvIndex';
import Sunrise from '../../src/components/sunrise/sunrise';
import Wind from '../../src/components/wind/wind';
import DewPoint from '../../src/components/dewPoint/dewPoint';
import FeelsLike from '../../src/components/feelsLike/feelsLike';
import Humidity from '../../src/components/humidity/humidity';
import moment from 'moment';
export default function WeatherDetail() {
  const globalState = useContext(store);
  console.log("🚀 ~ file: weatherDetail.js:7 ~ WeatherDetail ~ globalState:", globalState)
  // const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={{backgroundColor:"#708090",height:"100%",width:" 100%",paddingHorizontal:15}}>
      <View style={styles.topContent}>
          <Text style={styles.title}>{globalState?.state?.city}</Text>
          <View style={{flexDirection:"row",alignSelf:"center"}}>
          <Text style={styles.temperature}>{globalState.state.weatherDetail?Math.round(globalState.state.weatherDetail.temp
                    .day):Math.round(globalState.state.data.daily[0].temp.day)}°</Text>
          <Text style={{fontSize:20,fontWeight:700,lineHeight:24,color:"#B8B8B8"}}> | </Text>
          <Text style={styles.weather}>{globalState.state.weatherDetail?globalState.state.weatherDetail.weather
                    [0].description:globalState.state.data.daily[0].weather
                    [0].description}</Text>
          </View>
          <Text style={{fontSize:20,fontWeight:"600",lineHeight:24, color:"#B8B8B8",alignSelf:"center",marginTop:5}}>{globalState.state.weatherDetail? moment.unix(globalState.state.weatherDetail.dt).format('DD-MM-YYYY'): moment.unix(globalState.state.data.daily[0].dt).format('DD-MM-YYYY')}</Text>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <GeneralInformation globalState={globalState}/>
      <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",marginVertical:10,gap:10}}>
      <UvIndex globalState={globalState}/>
      <Sunrise globalState={globalState}/>
      <Wind globalState={globalState}/>
      <DewPoint globalState={globalState}/>
      <FeelsLike globalState={globalState}/>
      <Humidity globalState={globalState}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  topContent: {
    alignSelf: "center",
    width:"100%",
    paddingBottom:10
  },
  title: {
    fontWeight: "400",
    fontSize: 34,
    lineHeight: 41,
    textAlign:"center",
    color:"#ffffff",
    letterSpacing:0.37,
    marginTop:8
  },
  temperature: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.38,
    fontWeight: "600",
     color:"#B8B8B8",
  },
  weather: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.38,
    fontWeight: "600",
    textTransform: "capitalize",
     color:"#B8B8B8",
  },
})
