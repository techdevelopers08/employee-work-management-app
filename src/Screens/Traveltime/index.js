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
import Modal from "react-native-modal";

const Traveltime = ({ navigation, route }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const ref_input = useRef();
    const [notes, setNotes] = React.useState("");
    const [cmd, setCmd] = React.useState("");

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

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
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.tittleViewcolor}>
                            <Image source={require('../../../assets/whitetrvelclock.png')} style={styles.clockimg} />
                        </View>
                        <Text style={styles.overtxt}>Travel Time & Save</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('History')}>
                        <View style={styles.tittleView}>
                            <Image source={require('../../../assets/history.png')} style={styles.clockimg} />
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

                <View style={styles.actulview}>
                    <View style={styles.rowview}>
                        <Text style={styles.actualtext}>Travel Time?</Text>
                        <View style={styles.rowbtn}>
                            <TouchableOpacity style={styles.nobtn}>
                                <Text style={styles.notext}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.nobtn}>
                                <Text style={styles.notext}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: '3%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View >
                            <Text style={styles.actualtext}>Round Trip</Text>
                        </View>
                        <View style={styles.rowbtn}>
                            <TouchableOpacity style={styles.tymopbtn}>
                                <Text style={styles.notext}>00:45</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.tymopbtn, { marginLeft: '6%' }]}>
                                <Text style={styles.notext}>01
                                    :15</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '1%' }}>
                        <TouchableOpacity style={[styles.nobtn, { marginLeft: 0 }]}>
                            <Text style={styles.noroundtext}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nobtn}>
                            <Text style={styles.noroundtext}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rdoView}>
                    <Text style={styles.actualtext}>Tour Number:</Text>
                    <TouchableOpacity style={styles.countView}>
                        <Text style={styles.counttext}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countView}>
                        <Text style={styles.counttext}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countView}>
                        <Text style={styles.counttext}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countView}>
                        <Text style={styles.counttext}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countView}>
                        <Text style={styles.counttext}>5</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.notesView}>
                    <Text style={styles.actualtext}>Notes</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setNotes(text)}
                        ref={ref_input}
                        value={notes}
                        placeholder=""
                    />
                </View>
                <View style={styles.notesView}>
                    <Text style={styles.rdotext}>You want this OT on?</Text>
                    <View style={styles.cashmain}>
                        <TouchableOpacity style={styles.timebtn}>
                            <Text style={styles.timetxt}>Next Check</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cashbtn}>
                            <Text style={styles.cashtext}>Following Check</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.rdoView}>
                    <View>
                        <Text style={styles.rdotext}>Save to Calendar?</Text>
                    </View>
                    <View style={[styles.rowbtn, { marginRight: '5%' }]}>
                        <TouchableOpacity style={styles.yesbtn}>
                            <Text style={styles.yestext}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nobtn}>
                            <Text style={styles.notext}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rowview}>
                    <View style={styles.emailView}>
                        <Text style={styles.rdotext}>Save Email?</Text>
                        <View style={styles.rowbtntime}>
                            <TouchableOpacity style={styles.yesbtn}>
                                <Text style={styles.yestext}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.nobtn}>
                                <Text style={styles.notext}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.emailView}>
                        <Text style={styles.rdotext}>OT Earned</Text>
                        <View style={styles.rowbtntime}>
                            <TouchableOpacity style={styles.outbtn}>
                                <Text style={styles.outtext}>Outside
                                    Precint</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.nobtn}>
                                <Text style={styles.notext}>Precint</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.rdoView}>
                    <Text style={styles.commandtext}>Command Location Duty Performed</Text>
                    <TextInput
                        style={styles.inputcmd}
                        onChangeText={(text) => setCmd(text)}
                        ref={ref_input}
                        value={cmd}
                        placeholder="cmd#"
                    />
                </View>
                <View style={styles.rowview}>
                    <View style={[styles.rdoView, { marginLeft: '2%' }]}>
                        <Text style={styles.commandtext}>Incident Time:</Text>
                        <View style={styles.DataView}>
                            <Text style={styles.datetext}>00:00</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.nextbtn} onPress={toggleModal} >
                        <Text style={styles.nexttxt}>Save</Text>
                    </TouchableOpacity>
                </View>
                <Modal isVisible={isModalVisible}>
                    <View style={{ justifyContent:'center',backgroundColor:'#FFFFFF',borderRadius:10,padding:'5%' }}>
<Image source={require('../../../assets/sucessimg.png')} style={styles.sucess}/>
<Text style={styles.modalsavedtxt}>Saved!</Text>
                        <Text style={styles.modalnullatxt}>Nulla non nisi at libero tempor condimentum. </Text>
                        <TouchableOpacity style={styles.modalbtn} onPress={toggleModal} >
                        <Text style={styles.nexttxt}>Continue</Text>
                    </TouchableOpacity>
                    </View>
                </Modal>


            </ScrollView>
        </ImageBackground>
    )
};

export default Traveltime;