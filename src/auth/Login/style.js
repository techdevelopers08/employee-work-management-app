import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({


    image: {
        flex: 1,
        justifyContent: 'center',
    },
    Logotext: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily:'Poppins-Regular',
        textAlign: 'center',
        marginHorizontal: '15%',
        lineHeight: 25,
        marginVertical: '2%'

    },
    shorttext: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginHorizontal: '15%',
        lineHeight: 25,
        marginTop: '15%'
    },
    ortext: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily:'Poppins-Regular',
        textAlign: 'center',
        marginHorizontal: '3%',

    },
    eyeimg: {
        width: 24,
        height: 24,
        position: 'absolute',
        bottom: 20,
        right: 45,
    },
    continuebtn: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        height: 50,
        marginHorizontal: '23%',
        justifyContent: 'center',
        marginTop: '7%'
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        padding: 10,
        borderColor: '#FFFFFF',
        marginHorizontal: '9%',
        marginVertical: '3%',
        color: '#FFFFFF',paddingEnd:'10%'
    },
    signup: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        height: 50,
        marginHorizontal: '23%',
        justifyContent: 'center',
        marginTop: '7%'
    },
    rowline: {
        flexDirection: 'row', alignItems: 'center',
        marginHorizontal: '8%',
        marginVertical: '6%'
    },
    checkboxview: {
        flexDirection: 'row', alignItems: 'center',
        marginHorizontal: '8%',
        justifyContent: 'space-between',
        marginVertical: '2%'
    },
    directionview:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    textdirection:{
        flexDirection: 'row',
       justifyContent:'center',
    },
    textrember: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily:'Raleway-Bold',
    },
    doestext:{
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily:'Raleway',
    },
    textsign:{
        color: '#00FF33',
        fontSize: 14,
        fontFamily:'Raleway',
    },
    forgettext: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'right',
        marginLeft: '5%',
        fontFamily:'Raleway-Italic',
    },
    lineview: {
        flex: 1, height: 1.2, backgroundColor: '#ffffff'
    },
    logintext: {
        color: '#081D3D',
        fontSize: 16,
        fontFamily:'Poppins-SemiBold',
        textAlign: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 60,
        fontFamily:'Poppins-SemiBold',
        textAlign: 'center'
    }

});
export default styles