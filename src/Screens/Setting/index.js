import React, { useEffect, useState, useRef } from 'react';
import {
    Text, View,
    Image, StyleSheet, StatusBar,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from './style';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';


const Setting = ({ navigation, route }) => {
    const [isshow, setisshow] = useState(true);
    const showView = () => {
        setisshow(true);
    }
    const hideView = () => {
        setisshow(false);
    }
    return (

        <ImageBackground source={require('../../../assets/overimg.png')} resizeMode="cover" style={styles.image}>
            <StatusBar
                animated={true}
                backgroundColor="#0050C5"
            />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/leftarrow.png')} style={{ width: 25, height: 20 }} />
                </TouchableOpacity>
                <Text style={styles.headertxt}>Overtime Tracking App</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Menu') }}>
                    <Image source={require('../../../assets/menu.png')} style={{ width: 25, height: 20 }} />
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={styles.settingView}>
                    <Text style={styles.settingtext}>Settings</Text>
                </View>


                <View style={styles.rdoView}>
                    <Text style={styles.tourlenttxt}>Tour Length</Text>
                    {isshow ?
                        <TouchableOpacity onPress={() => hideView()}>
                            <Image source={require('../../../assets/upperarrow.png')} style={styles.uperarrowimg} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => showView()}>
                            <Image source={require('../../../assets/downarrow.png')} style={styles.uperarrowimg} />
                        </TouchableOpacity>
                    }
                </View>
                {isshow ?
                    <View style={[styles.actulview, { marginTop: '-2%' }]}>
                        <View style={styles.rowview}>
                            <Text style={styles.ratetext}>Cash/Overtime Rate</Text>
                            <TouchableOpacity style={styles.yesbtn}>
                                <Text style={styles.dolrtext}>$1,500.00</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rowview}>
                            <Text style={styles.ratetext}>Tim Rate</Text>
                            <TouchableOpacity style={styles.yesbtn}>
                                <Text style={styles.dolrtext}>$1,500.00</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rowview}>
                            <Text style={styles.ratetext}>Tour Lenght</Text>
                            <TouchableOpacity style={styles.yesbtn}>
                                <Text style={styles.dolrtext}>$1,500.00</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    null
                }


                <View style={[styles.rdoView, { marginTop: '7%' }]}>
                    <Text style={styles.tourlenttxt}>Edit Profile</Text>
                </View>





            </ScrollView>
        </ImageBackground>
    )
};

export default Setting;