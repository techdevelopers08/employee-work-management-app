import React, { useEffect, useState } from 'react';
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
import DatePicker from 'react-native-date-picker'


const Overtime = ({ navigation, route }) => {
    const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)


   const UpdateDate=()=>{
    <DatePicker
    modal
    open={open}
    date={date}
    onConfirm={(date) => {
      setOpen(false)
      setDate(date)
    }}      
    onCancel={() => {
      setOpen(false)
    }}
  />
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
                
                    <View style={styles.titlemain}>
                        <View>
                            <View style={styles.tittleViewcolor}>
                                <Image source={require('../../../assets/clock.png')} style={styles.clockimg} />
                            </View>
                            <Text style={styles.overtxt}>Overtime</Text>
                        </View>
                        <TouchableOpacity style={{alignItems:'center'}} >
                            <View style={styles.tittleView}>
                                <Image source={require('../../../assets/secondclock.png')} style={styles.clockimg} />
                            </View>
                            <Text style={styles.overtxt}>Travel Time & Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('History')}>
                            <View style={styles.tittleView}>
                                <Image source={require('../../../assets/history.png')} style={styles.clockimg} />
                            </View>
                            <Text style={styles.overtxt}>History</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Totals')}>
                            <View style={styles.tittleView}>
                                <Image source={require('../../../assets/summation.png')} style={styles.clockimg} />
                            </View>
                            <Text style={styles.overtxt}>Totals</Text>
                        </TouchableOpacity>

                    </View>

                
                <View style={styles.actulview}>
                    <View style={styles.rowview}>
                        <View>
                            <Text style={styles.actualtext}>Actually Worked</Text>
                            <View style={styles.formrowview} >
                                <Text style={styles.fromtext}>From:</Text>
                                <View>
                                    <TouchableOpacity style={styles.DataView} onPress={UpdateDate()} >
                                        <Text style={styles.datetext}>00/00/00</Text>
                                    </TouchableOpacity>

                                    
                                    <View style={[styles.DataView, { marginTop: '10%' }]}>
                                        <Text style={styles.datetext}>00:00</Text>
                                    </View>
                                </View>

                                <Text style={styles.fromtext}>To:</Text>
                                <View>
                                    <View style={styles.DataView}>
                                        <Text style={styles.datetext2}>00/00/00</Text>
                                    </View>
                                    <View style={[styles.DataView, { marginTop: '10%' }]}>
                                        <Text style={styles.datetext2}>00:00</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                        <View>
                            <Text style={styles.actualtext}>Total</Text>
                            <View style={styles.acttimeView}>
                                <Text style={styles.whitetimetext}>00:00</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.actulview}>
                    <View style={styles.rowview}>
                        <View>
                            <Text style={styles.actualtext}>Schedule to Worked</Text>
                            <View style={styles.formrowview}>
                                <Text style={styles.fromtext}>From:</Text>
                                <View>
                                    <View style={styles.DataView}>
                                        <Text style={styles.datetext}>00/00/00</Text>
                                    </View>
                                    <View style={[styles.DataView, { marginTop: '10%' }]}>
                                        <Text style={styles.datetext}>00:00</Text>
                                    </View>
                                </View>

                                <Text style={styles.fromtext}>To:</Text>
                                <View>
                                    <View style={styles.DataView}>
                                        <Text style={styles.datetext2}>00/00/00</Text>
                                    </View>
                                    <View style={[styles.DataView, { marginTop: '10%' }]}>
                                        <Text style={styles.datetext2}>00:00</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                        <View>
                            <Text style={styles.actualtext}>Total</Text>
                            <View style={styles.totalView}>
                                <Text style={styles.whitetime}>00:00</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={styles.overViermain}>
                    <Text style={styles.txtovertime}>Total Overtime</Text>
                    <View style={styles.DataView}>
                        <Text style={[styles.datetext2, { paddingHorizontal: '15%' }]}>01:55 Hours</Text>
                    </View>
                </View>
                <View style={styles.rdoView}>
                    <View>
                        <Text style={styles.rdotext}>RDO</Text>
                    </View>

                    <View style={styles.rowbtn}>
                        <TouchableOpacity style={styles.yesbtn}>
                            <Text style={styles.yestext}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nobtn}>
                            <Text style={styles.notext}>No</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.cashmain}>
                    <TouchableOpacity style={styles.cashbtn}>
                        <Text style={styles.cashtext}>Cash</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.timebtn}>
                        <Text style={styles.timetxt}>Time</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.appoxiView}>
                    <Text style={styles.appoxiText}>Approximate Time:</Text>
                    <View style={styles.DataView}>
                        <Text style={[styles.datetext2, { paddingHorizontal: '15%' }]}>01:55 Hours</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.nextbtn} onPress={()=>{navigation.navigate('Traveltime')}}>
                    <Text style={styles.nexttxt}>Next</Text>
                    <Image source={require('../../../assets/backicon.png')} style={styles.arrowimg} />
                </TouchableOpacity>

            </ScrollView>
        </ImageBackground>
    )
};

export default Overtime;