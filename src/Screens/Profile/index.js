import React, { useEffect, useState } from 'react';
import {
    Text, View,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from './style';
import ImagePicker from 'react-native-image-crop-picker';


const Profile = ({ navigation, route }) => {
    const [Lastname, onChangeLastname] = React.useState("");
    const [Command, onChangeCommand] = React.useState("");
    const [Shield, onChangeShield] = React.useState("");
    const [TaxID, onChangeTaxID] = React.useState("");
    const [Reference, onChangeReference] = React.useState("");
    const [filePath, setFilePath] = useState('');

    const ChoosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setFilePath(image.path)
        });
    }

    return (

        <ImageBackground source={require('../../../assets/backgroung.png')} resizeMode="cover" style={styles.image}>
            <Text style={styles.textreset}>Set your Profile</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#FFFFFF"
                    onChangeText={onChangeLastname}
                    value={Lastname}
                    placeholder="(Lastname, Firstname)"
                    color='#FFFFFF'
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#FFFFFF"
                    onChangeText={onChangeCommand}
                    value={Command}
                    placeholder="Command"
                    color='#FFFFFF'
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#FFFFFF"
                    onChangeText={onChangeShield}
                    value={Shield}
                    placeholder="Shield"
                    color='#FFFFFF'
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#FFFFFF"
                    onChangeText={onChangeTaxID}
                    value={TaxID}
                    placeholder="TaxID"
                    color='#FFFFFF'
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#FFFFFF"
                    onChangeText={onChangeReference}
                    value={Reference}
                    placeholder="Reference"
                    color='#FFFFFF'
                />
            </View>
            {filePath === "" ?
                <TouchableOpacity style={styles.profileview} onPress={()=>{ChoosePhotoFromLibrary()}}>
                    <Text style={styles.plus}>+</Text>
                    <View>
                        <Text style={styles.addtext}>Add Photo</Text>
                    </View>

                </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=>{ChoosePhotoFromLibrary()}}>
                <Image
                    source={{ uri: filePath }}
                    style={{
                        width: 120,
                        height: 120,
                       alignSelf:'center',
                       marginTop:'10%'
                    }}
                />
                </TouchableOpacity>
            }
            <TouchableOpacity style={styles.continuebtn} onPress={() => { navigation.navigate("Timein") }}>
                <Text style={styles.logintext}>Done</Text>
            </TouchableOpacity>

        </ImageBackground>

    )
};

export default Profile;