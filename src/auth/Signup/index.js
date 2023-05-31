import React, { useEffect, useState, useContext } from 'react';
import {
    Text, View,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput, ScrollView, Platform, ToastAndroid
} from 'react-native';
import styles from './style';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import { api_sign_up } from '../../../config/config';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../../components/contex';


const Signup = ({ navigation, route }) => {


    const { signUp } = useContext(AuthContext)


    const [authData, setAuthData] = useState({
        username: "",
        password: "",
        confirmPass: "",
        email: "",
        toggleCheckBox: false,
        updateSecureTextEntry: true,
        updateSecureTextEntryConfirm: true
    })


    const onChangeUsername = (val) => {
        setAuthData({
            ...authData,
            username: val
        })
    }

    const onChangeEmail = (val) => {
        setAuthData({
            ...authData,
            email: val
        })
    }


    const onChangePassword = (val) => {
        setAuthData({
            ...authData,
            password: val
        })
    }

    const onChangeConfirmPassword = (val) => {
        setAuthData({
            ...authData,
            confirmPass: val
        })
    }

    const updateSecureTextEntry = () => {
        setAuthData({
            ...authData,
            updateSecureTextEntry: !authData.updateSecureTextEntry
        });
    }
    const updateSecureTextEntryConfirm = () => {
        setAuthData({
            ...authData,
            updateSecureTextEntryConfirm: !authData.updateSecureTextEntryConfirm
        });
    }



    async function handleSignup() {

        if (authData.username != "" && authData.email != "" && authData.password != "" && authData.confirmPass != "" && authData.toggleCheckBox != false) {

            if (authData.password == authData.confirmPass) {

                console.log("Working")

                await axios.post(api_sign_up, ({
                    "username": authData.username,
                    "email": authData.email,
                    "password": authData.password,

                })
                ).then(function (response) {

                    console.log(response.data.body.token)
                    const json = response.data.body
                    signUp(json.token, authData.email)


                }).catch(function (error) {
                    if (Platform.OS === 'android') {
                        ToastAndroid.showWithGravity(error.response.data.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                    }
                    else {
                        alert(error.response.data.message)
                    }
                });


            } else {

                if (Platform.OS === 'android') {
                    ToastAndroid.showWithGravity("Password and Confirm Password must not be same", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                } else {
                    alert("Password and Confirm Password must  be same")
                }


            }
        } else {
            if (Platform.OS === 'android') {
                ToastAndroid.showWithGravity("InvalidCredentials", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
            } else {
                alert("InvalidCredentials")
            }
        }
    }



    return (

        <ImageBackground source={require('../../../assets/backgroung.png')} resizeMode="cover" style={styles.image}>
            <ScrollView>
                <Text style={styles.text}>LOGO</Text>
                <Text style={styles.Logotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam nisl.</Text>
                <Text style={styles.shorttext}>SIGN UP</Text>
                <View style={styles.inpuTextViewStyle}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#FFFFFF"
                        onChangeText={onChangeUsername}
                        value={authData.username}
                        placeholder="Username"

                        keyboardType='ascii-capable'
                        color='#FFFFFF'
                    />
                    <View style={styles.underlineViewStyle}>

                    </View>
                </View>

                <View style={styles.inpuTextViewStyle}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#FFFFFF"
                        onChangeText={onChangeEmail}
                        value={authData.email}
                        placeholder="Email"
                        keyboardType='email-address'
                        color='#FFFFFF'
                    />
                    <View style={styles.underlineViewStyle}>

                    </View>

                </View>
                <View style={[styles.inpuTextViewStyle]}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>


                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => onChangePassword(text)}
                            secureTextEntry={updateSecureTextEntry}
                            placeholderTextColor="#FFFFFF"
                            placeholder="password"
                        />
                        <View style={styles.underlineViewStyle}>

                        </View>
                        <TouchableOpacity
                            style={{ marginEnd: 10, alignItems: 'center', justifyContent: 'center' }}
                            onPress={updateSecureTextEntry}
                        >
                            {authData.updateSecureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="#fff"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="#fff"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>

                    </View>
                    <View style={styles.underlineViewStyle}>

                    </View>
                </View>
                <View style={styles.inpuTextViewStyle}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>

                        <TextInput
                            style={styles.input}
                            secureTextEntry={updateSecureTextEntryConfirm}
                            onChangeText={(text) => onChangeConfirmPassword(text)}
                            placeholderTextColor="#FFFFFF"
                            placeholder="Confirm Password"
                        />


                        <TouchableOpacity
                            style={{ marginEnd: 10, justifyContent: 'center', alignItems: 'center', end: 0 }}
                            onPress={updateSecureTextEntryConfirm}
                        >
                            {authData.updateSecureTextEntryConfirm ?
                                <Feather
                                    name="eye-off"
                                    color="#fff"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="#fff"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.underlineViewStyle}>

                    </View>
                </View>
                <View style={styles.checkboxview}>
                    <View style={styles.directionview}>
                        <CheckBox
                            tintColors={{ true: '#FFFFFF', false: '#FFFFFF' }}
                            disabled={false}
                            value={authData.toggleCheckBox}
                            onValueChange={(newValue) => setAuthData({ ...authData, toggleCheckBox: newValue })}
                        />
                        <Text style={styles.textrember}>I agree with <Text>TERMS AND CONDITION.</Text></Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.continuebtn} onPress={() => handleSignup()}>
                    <Text style={styles.logintext}>Continue</Text>
                </TouchableOpacity>


                <View style={styles.textdirection}>
                    <Text style={styles.doestext}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                        <Text style={styles.textsign}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>

    )
};

export default Signup;