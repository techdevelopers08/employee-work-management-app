import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import styles from './styles';


const Splash = ({ navigation, route }) => {
    function splash() {
        setTimeout(() => {
            navigation.replace('Overtime')
        }, 2000)
    };
    useEffect(() => {
        splash()
    })
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/backgroung.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>LOGO</Text>
            </ImageBackground>
        </View>
    )
};

export default Splash;