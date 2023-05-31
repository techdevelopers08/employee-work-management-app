import React, { useEffect, useState } from 'react';
import {
    Text, View,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput, ToastAndroid
} from 'react-native';
import styles from './style';
import axios from 'axios';
import { api_forgotPasssword } from '../../../config/config';

const Forgotpassword = ({ navigation, route }) => {


    const [data, setData] = React.useState({
        email: "",
    });

    const onChangeEmail = (val) => {
        setData({
            ...data,
            email: val
        })
    }

    function handleNav() {
        navigation.navigate("Verification", {
            "email": data.email
        })
    }

    async function handleforgotpassword() {



        if (data.email != "") {

            await axios.post(api_forgotPasssword, ({
                "email": data.email
            })
            ).then(function (response) {

                ToastAndroid.showWithGravity(response.data.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM)


                handleNav()

            }).catch(function (error) {
            });
        } else {
            ToastAndroid.showWithGravity("Invalid Email", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
        }
    }

    return (

        <ImageBackground source={require('../../../assets/backgroung.png')} resizeMode="cover" style={styles.image}>
            <Text style={styles.textforgot}>Forgot Password?</Text>
            <Text style={styles.Logotext}>Please enter your email address or phone number. You will receive a link to create a new password via email or SMS.</Text>

            <View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#FFFFFF"
                    onChangeText={(text) => onChangeEmail(text)}
                    placeholder="Enter Email Address"
                    color='#FFFFFF'
                />
            </View>

            <TouchableOpacity style={styles.continuebtn} onPress={() => { handleforgotpassword() }}>
                <Text style={styles.logintext}>Send</Text>
            </TouchableOpacity>


        </ImageBackground>

    )
};

export default Forgotpassword;