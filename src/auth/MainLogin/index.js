import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './style';


const MainLogin = ({ navigation, route }) => {

    return (
 
        <ImageBackground source={require('../../../assets/backgroung.png')} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>LOGO</Text>
            <Text style={styles.Logotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam nisl.</Text>
            <TouchableOpacity style={styles.Login} onPress ={()=>{navigation.navigate('Login')}}>
                <Text style={styles.logintext}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signup} onPress={()=>{navigation.navigate('Signup')}}>
                <Text style={styles.logintext}>SIGN UP</Text>
            </TouchableOpacity>
            <View style={styles.rowline}>
                <View style={styles.lineview}/>
                <Text style={styles.ortext}>or</Text>
                <View style={styles.lineview}/>
            </View>
            
        </ImageBackground>

    )
};

export default MainLogin;