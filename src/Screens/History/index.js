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


const History = ({ navigation, route }) => {
    const DATA = [
        {
            title: 'Dec. 07, 2021 ',
            titleot: 'OT: ',
            title2: '4 Hours 30 Minutes',
            titlecash: 'Cash',
            titlecash2: '$150.00',
            titlebtn: 'Paid',
            Color: '#00CE67'
        },
        {
            title: 'Dec. 07, 2021 ',
            titleot: 'OT: ',
            title2: '4 Hours 30 Minutes',
            titlecash: 'Cash',
            titlecash2: '$150.00',
            titlebtn: 'Unpaid',
            Color: '#E35D5D',
        },

    ];

    const renderItem = ({ item, title }) => (
        <View style={styles.rdoView}>
            <View style={styles.actulview}>
                <View >
                    <Image source={require('../../../assets/Dollar.png')} style={styles.dolarimg} />
                </View>
                <TouchableOpacity style={[{backgroundColor:'item.Color'},styles.paidbtn]}>
                    <Text style={styles.paidtxt}>{item.titlebtn}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center', marginVertical: '3%' }}>
                <Text style={styles.rdotext}>{item.title}</Text>
                <Text style={styles.ottxt}>{item.titleot}<Text style={styles.hrmttxt}>{item.title2}</Text></Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Text style={styles.rdotext}>{item.titlecash}</Text>
                <Text style={styles.textpr}>{item.titlecash2}</Text>
            </View>
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={()=>navigation.navigate('Historydtl')}>
                <Image source={require('../../../assets/rightarrow.png')} style={styles.rightimg} />
            </TouchableOpacity>

        </View>

    );

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




            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>




        </ImageBackground>
    )
};

export default History;