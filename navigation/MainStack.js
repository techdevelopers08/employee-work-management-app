import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Timein from '../src/Screens/Timein';
import Overtime from '../src/Screens/Overtime';
import Menu from '../src/Screens/Menu';
import Traveltime from '../src/Screens/Traveltime';
import History from '../src/Screens/History';
import Totals from '../src/Screens/Totals';
import Setting from '../src/Screens/Setting';
import Historydtl from '../src/Screens/Historydtl';
import Quarter from '../src/Screens/Quarter';

import Terms from '../src/auth/Terms';
import Profile from '../src/Screens/Profile';
import Success from '../src/auth/Success';

const MainStack = () => {

    const Stack = createNativeStackNavigator()

    return (

        <Stack.Navigator
            initialRouteName='Overtime'
        >


            <Stack.Screen name="Overtime" component={Overtime} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Timein" component={Timein} options={{ headerShown: false }} />

            <Stack.Screen name="Menu" component={Menu} options={{
                headerShown: false,
            }} />
            <Stack.Screen name='Traveltime' component={Traveltime} options={{ headerShown: false }} />
            <Stack.Screen name='History' component={History} options={{ headerShown: false }} />
            <Stack.Screen name='Historydtl' component={Historydtl} options={{ headerShown: false }} />
            <Stack.Screen name='Totals' component={Totals} options={{ headerShown: false }} />
            <Stack.Screen name='Quarter' component={Quarter} options={{ headerShown: false }} />
            <Stack.Screen name='Setting' component={Setting} options={{ headerShown: false }} />
            <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
            <Stack.Screen name="Terms" component={Terms} options={{ headerShown: false }} />

        </Stack.Navigator>

    )

}

export default MainStack