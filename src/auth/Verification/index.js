import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import {
    Text, View,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput, Platform, ToastAndroid
} from 'react-native';
import { otp_verification } from '../../../config/config';
import styles from './style';


const Verification = ({ navigation, route }) => {

    let email = route.params.email
    const [Username, onChangeUsername] = useState('');
    const Pin1Ref = useRef(null)
    const Pin2Ref = useRef(null)
    const Pin3Ref = useRef(null)
    const Pin4Ref = useRef(null)

    const [Pin1, setPin1] = useState('');
    const [Pin2, setPin2] = useState('');
    const [Pin3, setPin3] = useState('');
    const [Pin4, setPin4] = useState('');

    function handleVerification(params) {

        if (Pin1 != '' && Pin2 != '' && Pin3 != '' && Pin4 != '') {

            axios.post(otp_verification, ({
                "email": email,
                "otp": Pin1 + Pin2 + Pin3 + Pin4
            })
            ).then(function (response) {

                navigation.navigate("ResetPassword", {
                    "email": email
                })

            }).catch(function (error) {
            });

            // fetch(otp_verification, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: {
            //         'email': email,
            //         'otp': Pin1 + Pin2 + Pin3 + Pin4
            //     }
            // }).then((response) => {
            //     console.log("Working")
            //     console.log(response)
            //     navigation.navigate("ResetPassword",{

            //     })
            // }).catch(() => {

            // })
        } else {
            if (Platform.OS === 'android') {
                ToastAndroid.showWithGravity("Invalid Otp", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
            }
            else {
                alert("Invalid Otp")
            }
        }

    }


    return (

        <ImageBackground source={require('../../../assets/backgroung.png')} resizeMode="cover" style={styles.image}>
            <Text style={styles.textforgot}>Enter Verification Code.</Text>

            <View style={styles.directionview}>
                <TextInput
                    ref={Pin1Ref}
                    style={styles.shortinput}
                    maxLength={1}
                    keyboardType={'number-pad'}
                    onChange={(Pin1) => {
                        setPin1(Pin1);
                        if (Pin1 != '') {
                            Pin2Ref.current.focus();
                        }
                    }} />

                <TextInput
                    ref={Pin2Ref}
                    style={styles.shortinput}
                    maxLength={1}
                    keyboardType={'number-pad'}
                    onChangeText={(Pin2) => setPin2(Pin2)}
                    onChange={(Pin2) => {
                        setPin2(Pin2);
                        if (Pin2 != '') {
                            Pin3Ref.current.focus();
                        }
                    }} />




                <TextInput
                    ref={Pin3Ref}
                    style={styles.shortinput}
                    keyboardType={'number-pad'}
                    onChangeText={(Pin3) => setPin3(Pin3)}
                    onChange={(Pin3) => {
                        setPin3(Pin3);
                        if (Pin3 != '') {
                            Pin4Ref.current.focus();
                        }
                    }}


                />


                <TextInput
                    ref={Pin4Ref}
                    style={styles.shortinput}
                    maxLength={1}
                    keyboardType={'number-pad'}
                    onChangeText={(Pin4) => setPin4(Pin4)}
                />

            </View>

            <TouchableOpacity style={styles.continuebtn} onPress={() => handleVerification()}>
                <Text style={styles.logintext}>OK</Text>
            </TouchableOpacity>


        </ImageBackground>

    )
};

export default Verification;