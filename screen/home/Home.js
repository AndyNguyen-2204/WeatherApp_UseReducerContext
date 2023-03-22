import React, { useContext, useState } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import HourlyForecast from "../../src/components/hourlyForecast/index"
import { store } from "../../context/store"
import { debounce } from 'lodash';
export default function Home() {
  const globalState = useContext(store);
  const [city, setCity] = useState("Ha noi")
  const [err,setErr]=useState("")
  const [nullData,setNullData]=useState(true)
  const updateCity=text=>{
    text = text.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    text = text.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    text = text.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    text = text.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    text = text.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    text = text.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    text = text.replace(/đ/g,"d");
    text = text.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    text = text.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    text = text.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    text = text.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    text = text.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    text = text.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    text = text.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    text = text.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    text = text.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    text = text.replace(/ + /g," ");
    text = text.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    text = text.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,"");
    return  setCity(text)
  }
  const debounceOnchange=debounce(updateCity,1000)
  setTimeout(function(){
    setNullData(false)
}, 1500);
  return (
   <>
   {nullData?
        <>
        <View style={{height:"100%",width:"100%",flexDirection:"column",justifyContent:"center",alignItems:'center',backgroundColor:"#394c6b"}}>
        <ActivityIndicator size="large" color="#ffffff"/>
        </View>
        <View style={{display:"none"}} >
        <HourlyForecast city={city} setErr={setErr} />
        </View>
        </>
        : 
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
        </SafeAreaView>}
   </>
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
