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


const Quarter = ({ navigation, route }) => {
    const ref_input = useRef();
    const [notes, setNotes] = React.useState("");
    const [cmd, setCmd] = React.useState("");
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
                        <View style={styles.tittleView}>
                            <Image source={require('../../../assets/history.png')} style={styles.clockimg} />
                        </View>
                        <Text style={styles.overtxt}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Totals')}>
                        <View style={styles.tittleViewcolor}>
                            <Image source={require('../../../assets/whitesummation.png')} style={styles.clockimg} />
                        </View>
                        <Text style={styles.overtxt}>Totals</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.rowview}>
                    <TouchableOpacity style={styles.cashbtn} onPress={()=>{navigation.navigate('Totals')}}>
                        <Text style={styles.cashtext}>Monthly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.timebtn}>
                        <Text style={styles.timetxt}>Quarterly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cashbtn}>
                        <Text style={styles.cashtext}>Pay Check</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowview}>
                    <Text style={styles.jantext}>Quarters</Text>
                    <Text style={styles.jantext}>Overtime</Text>
                    <Text style={styles.jantext}>Time</Text>
                    <Text style={styles.jantext}>Cash</Text>
                </View>
                <View style={styles.actulview}>

                    <View style={styles.formrowview}>
                        <Text style={styles.jantext}>Quarter 1</Text>
                        <TouchableOpacity style={styles.yesbtn}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesbtn}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesbtn}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formrowview}>
                        <Text style={styles.jantext}>Quarter 2</Text>
                        <TouchableOpacity style={styles.yesbtncolor}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesbtncolor}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesbtncolor}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formrowview}>
                        <Text style={styles.jantext}>Quarter 3</Text>
                        <TouchableOpacity style={styles.yesbtn}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesbtn}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesbtn}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formrowview}>
                        <Text style={styles.jantext}>Quarter 4</Text>
                        <TouchableOpacity style={styles.yesbtncolor}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesbtncolor}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesbtncolor}>
                            <Text style={styles.numtext}>00:00</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.formrowviewcolor}>
                        <Text style={styles.totaltxt}>Tatals</Text>
                        <TouchableOpacity style={styles.yesbtn2}>
                            <Text style={styles.yestext}>00:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesbtn2}>
                            <Text style={styles.yestext}>00:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesbtn2}>
                            <Text style={styles.yestext}>00:00</Text>
                        </TouchableOpacity>
                    </View>

                </View>




            </ScrollView>
        </ImageBackground>
    )
};

export default Quarter;