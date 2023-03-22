import moment from 'moment';
import React, { useContext } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native' 
import { Dimensions } from "react-native";
import {
   LineChart,
   BarChart,
   PieChart,
   ProgressChart,
   ContributionGraph,
   StackedBarChart
 } from "react-native-chart-kit";
import { store } from '../../context/store';
 const LineChartScreen=()=>{
   const screenWidth = Dimensions.get("window").width;
   const screenHeight = Dimensions.get("window").height - 100;
   const globalState = useContext(store);
   console.log("🚀 ~ file: index.js:23 ~ hourlyForecast ~ globalState:", globalState)
   const label=globalState?.state?.data.daily.map((e,index)=>moment.unix(e.dt).format('DD-MM'))
   const dataTemperature=globalState?.state?.data.daily.map((e,index)=>Math.round(e.temp.day))
   const data = {
      labels: label,
      datasets: [
        {
          data: dataTemperature,
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 5 // optional
        }
      ],
      legend: ["Temperature Days"] // optional
    };
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientTo: "#000000",
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
  return (
     <SafeAreaView>
      <LineChart
      data={data}
      width={screenWidth}
      height={screenHeight}
      chartConfig={chartConfig}
      />
     </SafeAreaView>
  )
}
 export default LineChartScreen
