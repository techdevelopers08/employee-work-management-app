import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext, UserContext } from './components/contex';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';

const App = ({ navigation }) => {
  const initialState = {
    userEmail: null,
    userToken: null,
  }


  const loginReducer = (prevState, action) => {
    switch (action.type) {

      case 'SIGNUP':
        return {
          ...prevState,
          userToken: action.token,
          onBoard: action.onBoard,
          userEmail: action.email
        }

      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          onBoard: action.onBoard,
          userEmail: action.email
        }
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          onBoard: action.onBoard,
          userEmail: action.email
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          userEmail: null,
          onBoard: "true"
        }
    }
  }


  const [loginState, dispatch] = React.useReducer(loginReducer, initialState)


  const authContext = React.useMemo(() => ({

    signUp: async (user_token, userEmail) => {

      console.log(user_token, userEmail)

      try {

        await AsyncStorage.setItem('userToken', user_token);

        await AsyncStorage.setItem('userEmail', userEmail);

      }
      catch (e) {
        console.log(e);
      }
      dispatch({ type: 'SIGNUP', token: user_token, email: userEmail, onBoard: "true" })
    },

    signIn: async (user_token, userEmail) => {

      console.log("Token", user_token, "EMail", userEmail)

      try {

        await AsyncStorage.setItem('userToken', user_token);

        await AsyncStorage.setItem('userEmail', userEmail);

      }
      catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', token: user_token, email: userEmail })
    },

    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken')
        await AsyncStorage.removeItem('userEmail')
      }
      catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' })
    },

  }), []);

  useEffect(() => {
    setTimeout(async () => {
      let userToken, onBoard, userEmail;
      userToken = null
      onBoard = null
      userEmail = null
      try {

        userToken = await AsyncStorage.getItem('userToken')
        userEmail = await AsyncStorage.getItem('userEmail')
        onBoard = await AsyncStorage.getItem('onboard')
        console.log("ggjhgjhgjhgjhg", onBoard)
      }
      catch (e) {
        console.log(e);
      }
      dispatch(
        { type: 'RETRIEVE_TOKEN', token: userToken, email: userEmail }
      )
    }, 1000)
  }, [])

  return (

    <AuthContext.Provider value={authContext} >

      <UserContext.Provider value={loginState.userToken}>



        <NavigationContainer>

          {loginState.userToken != null ? <MainStack /> : <AuthStack />}


        </NavigationContainer>

      </UserContext.Provider>
    </AuthContext.Provider >

  );
};



export default App;
