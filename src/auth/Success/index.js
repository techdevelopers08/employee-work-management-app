import React, { useEffect, useState } from 'react';
import {
    Text, View,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import style from './style'

const Success = ({ navigation, route }) => {


    return (

        <ImageBackground source={require('../../../assets/backgroung.png')} resizeMode="cover" style={style.image}>
            <View>
                <Image source={require('../../../assets/check.png')} style={style.checkimg} />
                <Text style={style.textsuce}>Success!</Text>
            </View>
            <View>

                <Text style={style.sucesstext}>Your new password has been set!</Text>
            </View>

            <TouchableOpacity style={style.continuebtn} onPress={() => { navigation.navigate("Signup") }}>
                <Text style={style.logintext}>Login</Text>
            </TouchableOpacity>


        </ImageBackground>

    )
};

export default Success;