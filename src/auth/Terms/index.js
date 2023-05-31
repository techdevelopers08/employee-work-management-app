import React, { useEffect, useState } from 'react';
import {
    Text, View,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from './style';
import CheckBox from '@react-native-community/checkbox';

const Terms = ({ navigation, route }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (

        <ImageBackground source={require('../../../assets/backgroung.png')} resizeMode="cover" style={styles.image}>
            <Text style={styles.textreset}>Terms and Condition</Text>
            
            <View>
            <Text style={styles.Loremtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus arcu a tellus interdum imperdiet. Nullam lacinia congue lorem vel venenatis.</Text>
            </View>
            <View>
            <Text style={styles.termtext}>Term and Policy</Text>
            </View>
            <View>
            <Text style={styles.nulltext}>Nullam nec dictum libero. Mauris vestibulum libero sit amet faucibus mollis. Maecenas a suscipit tellus. Vivamus et vehicula ligula. Quisque sapien leo, scelerisque id placerat ac, congue non mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam pulvinar, tellus at ultricies lacinia, dui urna posuere velit, vel fringilla erat ipsum sit amet velit. </Text>
            </View>
            <View style={styles.checkboxview}>
                <View style={styles.directionview}>
                <CheckBox
               tintColors={{ true: '#FFFFFF', false: '#FFFFFF' }}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.textrember}>I agree with <Text>TERMS AND CONDITION.</Text></Text>
                </View>
            </View>

            <View style={styles.directionview}>
            <TouchableOpacity style={styles.continuebtn} onPress={()=>{navigation.navigate("")}}>
                <Text style={styles.logintext}>Disagree</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.continuebtn2} onPress={()=>{navigation.navigate("Profile")}}>
                <Text style={styles.logintext}>Accept</Text>
            </TouchableOpacity>
            </View>


            
        </ImageBackground>

    )
};

export default Terms;