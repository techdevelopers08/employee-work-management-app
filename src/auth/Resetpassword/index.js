import React, { useEffect, useState } from 'react';
import {
    Text, View,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from './style';


const Resetpassword = ({ navigation, route }) => {

    const [data, setData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    })

    const onChangeUsername = (val) => {
        setData({
            ...data,
            username: val
        })
    }

    const onChangePassword = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const onChangeConfirmPass = () => {
        setData({
            ...data,
            confirmPassword: val
        })
    }





    return (

        <ImageBackground source={require('../../../assets/backgroung.png')} resizeMode="cover" style={styles.image}>
            <Text style={styles.textreset}>Reset Your Password</Text>

            <View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#FFFFFF"
                    onChangeText={onChangeUsername}
                    value={data.username}
                    placeholder="Username"
                    color='#FFFFFF'
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#FFFFFF"
                    onChangeText={onChangePassword}
                    value={data.password}
                    placeholder="New Password"
                    color='#FFFFFF'
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#FFFFFF"
                    onChangeText={onChangeConfirmPass}
                    value={data.confirmPassword}
                    placeholder="Confirm New Password"
                    color='#FFFFFF'
                />

            </View>

            <TouchableOpacity style={styles.continuebtn} onPress={() => { navigation.navigate("Success") }}>
                <Text style={styles.logintext}>OK</Text>
            </TouchableOpacity>


        </ImageBackground>

    )
};

export default Resetpassword;