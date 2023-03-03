import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../../screen/home/Home';
import WeatherDetail from "../../../../screen/weatherDetail/weatherDetail"
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
export default function TabBottom() {
  const Tab = createBottomTabNavigator();
  return (
  <NavigationContainer>
    <Tab.Navigator initialRouteName='Home'
    screenOptions={{
       tabBarShowLabel:false,
       tabBarStyle: { backgroundColor:"#708090" },
       tabBarInactiveTintColor:"#ffffff",
       tabBarActiveTintColor:"#E3D946",
       tabBarHideOnKeyboard:true
    }}
    >
    <Tab.Screen name="Home" component={Home}
    options={{
      headerShown:false,
      tabBarIcon: ({ color, size }) => (
        <Icon1 name="home" color={color} size={size} />
      ),
    }}
    />
    <Tab.Screen name="Detail" component={WeatherDetail} 
     options={{
      headerShown:false,
      tabBarIcon: ({ color, size }) => (
        <Icon2 name="list" color={color} size={size} />
      ),
    }}
    />
  </Tab.Navigator>
  </NavigationContainer>
  )
}
