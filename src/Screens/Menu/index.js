import React, { useEffect, useState } from 'react';
import {
    Text, View,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { AuthContext } from '../../../components/contex';
import styles from './style';

const Menu = ({ navigation, route }) => {

    const { signOut } = React.useContext(AuthContext)

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/menuscreen.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../assets/leftarrow.png')} style={{ width: 25, height: 20 }} />
                    </TouchableOpacity>
                    <Text style={[styles.headertxt, { marginLeft: '15%' }]}>Overtime Tracking App</Text>

                </View>
                <View style={styles.profileview}>
                    <View>
                        <Image source={require('../../../assets/profile.png')} style={styles.profileimg} />
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.fullnametxt}>User Full Name</Text>
                        <Text style={styles.usertext}>Users Position</Text>
                    </View>

                </View>
                <View style={styles.homeView}>
                    <TouchableOpacity style={styles.lineView} onPress={() => navigation.navigate('Overtime')} >
                        <Text style={styles.hometext}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.lineView} onPress={() => navigation.navigate('History')} >
                        <Text style={styles.hometext}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.lineView}>
                        <Text style={styles.hometext}>Terms</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.lineView}>
                        <Text style={styles.hometext}>Privacy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')} style={styles.lineView}>
                        <Text style={styles.hometext}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => signOut()} style={styles.lineView}>
                        <Text style={styles.hometext}>Logout</Text>
                    </TouchableOpacity>
                </View>


            </ImageBackground>
        </View>


    )
};

export default Menu;