import React, { useEffect, useState } from 'react';
import {
    Text, View,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from './style';

const Timein = ({ navigation, route }) => {


    return (

        <ImageBackground source={require('../../../assets/backgroung.png')} resizeMode="cover" style={styles.image}>
            <View style={{marginHorizontal:'1%'}}>
                <Text style={styles.textreset}>Nulla non nisi at libero tempor condimentum. Vivamus mattis ligula mauris, consectetur luctus quam convallis sit amet.    </Text>
            </View>



            <TouchableOpacity style={styles.continuebtn} onPress={() => { navigation.navigate("Overtime") }}>
                <Text style={styles.logintext}>Clock In Now!</Text>
            </TouchableOpacity>

        </ImageBackground>

    )
};

export default Timein;