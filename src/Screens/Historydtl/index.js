import React, { useEffect, useState } from 'react';
import {
    Text, View,
    Image, StyleSheet, StatusBar,
    ImageBackground,
    TouchableOpacity,
    TextInput, FlatList
} from 'react-native';
import styles from './style';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';


const Historydtl = ({ navigation, route }) => {

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


            <View style={styles.titlemain}>
                <TouchableOpacity onPress={() => navigation.navigate('Overtime')}>
                    <View style={styles.tittleView}>
                        <Image source={require('../../../assets/blueclock.png')} style={styles.clockimg} />
                    </View>
                    <Text style={styles.overtxt}>Overtime</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Traveltime')}>
                    <View style={styles.tittleView}>
                        <Image source={require('../../../assets/secondclock.png')} style={styles.clockimg} />
                    </View>
                    <Text style={styles.overtxt}>Travel Time & Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('History')}>

                    <View style={styles.tittleViewcolor}>
                        <Image source={require('../../../assets/whitehistory.png')} style={styles.clockimg} />
                    </View>
                    <Text style={styles.overtxt}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Totals')}>
                    <View style={styles.tittleView}>
                        <Image source={require('../../../assets/summation.png')} style={styles.clockimg} />
                    </View>
                    <Text style={styles.overtxt}>Totals</Text>
                </TouchableOpacity>

            </View>
            <View style={[styles.rdoView, { marginTop: '5%' }]}>
                <View>
                    <Text style={styles.rdotext}>Actually Worked</Text>
                    <View>
                        <Text style={styles.fromtotxt}>From: Friday 10/07/21 07:05</Text>
                        <Text style={styles.fromtotxt}>To: Friday 10/07/21 20:20</Text>
                    </View>

                </View>
                <View>
                    <Text style={styles.rdotext}>Total</Text>
                    <Text style={styles.fromtotxt}>13 Hours 15 Minutes</Text>

                </View>
            </View>
            <View style={styles.rdoView}>
                <View>
                    <Text style={styles.rdotext}>Scheduled to Work</Text>
                    <View>
                        <Text style={styles.fromtotxt}>From: Friday 10/07/21 07:05</Text>
                        <Text style={styles.fromtotxt}>To: Friday 10/07/21 15:40</Text>
                    </View>

                </View>
                <View>
                    <Text style={styles.rdotext}>Total</Text>
                    <Text style={styles.fromtotxt}>8 Hours 35 Minutes</Text>

                </View>
            </View>
            <View style={styles.performview}>
                <Text style={styles.performtxt}>Overtime Performed</Text>
                <Text style={styles.fromtotxt}>4 Hours 40 Minutes</Text>
            </View>
            <View style={{ marginVertical: '4%' }}>
                <Text style={styles.takingtxt}>You are taking this in:<Text style={styles.rdotext}> CASH</Text></Text>
                <Text style={styles.takingtxt}>Approximate Earnings:
                    <Text style={styles.rdotext}> $144.10</Text></Text>
            </View>
            <View style={styles.travelmainView}>
                <View>
                    <Text style={styles.rdotext}>Travel Time</Text>
                    <Text style={styles.notestxt}>Notes:</Text>
                    <Text style={styles.notestxt}>Created on:</Text>
                    <TouchableOpacity style={styles.addbtn}>
                        <Text style={styles.addtext}>Add notes</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.rdotext}>Round Trip?</Text>
                    <Text style={styles.notestxt}>NO</Text>
                    <Text style={styles.rdotext}>New Arrest#:</Text>
                    <Text style={styles.notestxt}>Q16000001M</Text>
                    <Text style={styles.notestxt}>Friday 10/07/21 21:48</Text>
                </View>
            </View>

        </ImageBackground>
    )
};

export default Historydtl;