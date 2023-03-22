import React, { useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import Tab from '../tabControl/tab'
import ViewWeather from '../viewWeather/viewWeather'
import { store } from '../../../context/store'
import axios from 'axios'
import { actFetchApiRequest } from '../callApi'
import { useNavigation } from '@react-navigation/native';
export default function hourlyForecast({city,setErr}) {
  const contenttab = [
    {
      title: "Hourly Forecast",
      value: 1
    },
    {
      title: "Weekly Forecast",
      value: 2
    },
  ]
  const [valueTab, setValueTab] = useState(1)
  const navigation = useNavigation();
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const handelGetDetail=(data,valueTab)=>{
    if(valueTab === 2){
      dispatch({
        type: 'GET_WEATHERDETAIL',
        data: data
      })
      navigation.navigate("Detail")
    }
  }
  const renderViewWeather = useMemo(() => {
    if (Object.entries(globalState.state).length > 1) {
      if (valueTab === 1) {
        return (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 12 }}
            data={globalState.state.data.hourly}
            renderItem={({ item, index }) => <ViewWeather handelGetDetail={handelGetDetail} data={item} key={index} valueTab={valueTab} />}
            keyExtractor={item => item.dt}
          />
        )
      } else if (valueTab === 2) {
        return (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 12 }}
            data={globalState.state.data.daily}
            renderItem={({ item, index }) => <ViewWeather handelGetDetail={handelGetDetail} data={item} key={index} valueTab={valueTab} />}
            keyExtractor={item => item.dt}
          />
        )
      }
    } else {
      return null
    }
  }, [valueTab, globalState.state])
  useLayoutEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a586bbaf265534b4e8dee48c21d69611&units=metric&lang=vi`)
      .then(res => {
        dispatch({
          type: 'GET_CITY',
          data: res.data.name
        })
        setErr("")
        actFetchApiRequest(res.data, dispatch)
      }).catch(err=>{
        if(city!==""){
          setErr("Không tìm thấy thành phố  ")
        }
      }  
      )
  }, [city])
  return (
    <SafeAreaView style={styles.wraphourlyForecast}>
      <View style={styles.background}></View>
      <View style={{ position: "absolute", top: 35 }}>
        <Tab content={contenttab} setValueTab={setValueTab} valueTab={valueTab} />
        <View>
          {renderViewWeather}
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wraphourlyForecast: {
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
    position: "relative",
  },
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#708090",
    opacity: 0.7,
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
  }
})
