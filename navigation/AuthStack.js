import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Logo from '../src/auth/Logo';
import MainLogin from '../src/auth/MainLogin';
import Login from '../src/auth/Login';
import Forgotpassword from '../src/auth/Forgotpassword';
import Verification from '../src/auth/Verification';
import Resetpassword from '../src/auth/Resetpassword';
import Signup from '../src/auth/Signup';


const AuthStack = () => {

    const Stack = createNativeStackNavigator()


    return (

        <Stack.Navigator
            initialRouteName='Logo'>
            <Stack.Screen name="Logo" component={Logo} options={{ headerShown: false }} />
            <Stack.Screen name="MainLogin" component={MainLogin} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Forgotpassword" component={Forgotpassword} options={{ headerShown: false }} />
            <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={Resetpassword} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />


        </Stack.Navigator>

    )

}

export default AuthStack