
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../../screen/home/Home';
const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown:false
            }} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
                headerTitle:""
            }} />
        </Stack.Navigator>
    )
}
export default StackNavigation