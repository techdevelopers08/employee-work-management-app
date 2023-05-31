import React, { useEffect, useState, useRef } from 'react';
import {
    Text, View,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from './style';
import axios from 'axios';
import { api_login } from '../../../config/config';
import CheckBox from '@react-native-community/checkbox';
import { AuthContext } from '../../../components/contex';

const Login = ({ navigation, route }) => {
    const { signIn } = React.useContext(AuthContext);


    const ref_input = useRef();

    const [deviceToken, setDeviceToken] = useState("")

    const [loading, setLoading] = useState(false);

    const [data, setData] = React.useState({
        Username: "",
        password: "",
    });

    const [toggleCheckBox, setToggleCheckBox] = useState(false);



    const onChangeEmail = (val) => {

        setData({
            ...data,
            Username: val
        })
    }

    const onChangePassword = (val) => {

        setData({
            ...data,
            password: val
        })
    }
    function handleNav() {
        navigation.navigate("Overtime")
    }
    async function handlesubmit() {


        console.log(data.Username, data.password)

        if (data.Username != "" && data.password != "") {


            await axios.post(api_login, ({
                "user": data.Username,
                "password": data.password

            })
            ).then(function (response) {
                console.log(response.data)
                signIn(response.data.body.token, data.Username)
                // handleNav();

            }).catch(function (error) {

            });
        } else {
            alert('Login successful')
        }
    }

    return (

        <ImageBackground source={require('../../../assets/backgroung.png')} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>LOGO</Text>
            <Text style={styles.Logotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam nisl.</Text>
            <Text style={styles.shorttext}>LOGIN</Text>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeEmail(text)}
                    placeholderTextColor="#FFFFFF"
                    onSubmitEditing={() => ref_input.current.focus()}
                    returnKeyType={"next"}
                    placeholder="Username"
                    color='#FFFFFF'
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangePassword(text)}
                    placeholderTextColor="#FFFFFF"
                    ref={ref_input}
                    placeholder="password"
                />
                <Image source={require('../../../assets/eye.png')} style={styles.eyeimg} />
            </View>
            <View style={styles.checkboxview}>
                <View style={styles.directionview}>
                    <CheckBox
                        tintColors={{ true: '#FFFFFF', false: '#FFFFFF' }}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={styles.textrember}>Remember me</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate("Forgotpassword") }}>
                    <Text style={styles.forgettext}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.continuebtn} onPress={() => { handlesubmit() }}>
                <Text style={styles.logintext}>Continue</Text>
            </TouchableOpacity>

            <View style={styles.rowline}>
                <View style={styles.lineview} />
                <Text style={styles.ortext}>or</Text>
                <View style={styles.lineview} />
            </View>
            <View style={styles.textdirection}>
                <Text style={styles.doestext}>Doesn't have an account? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
                    <Text style={styles.textsign}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )
};

export default Login;