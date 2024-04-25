import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Payment from './screens/Payment'
import Shares from './screens/Shares'
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Payment" component={Payment} />
                <Stack.Screen name="Shares" component={Shares} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation