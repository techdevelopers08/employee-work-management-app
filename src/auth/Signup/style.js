import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },

    Logotext: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'Nunito-SemiBold',
        textAlign: 'center',
        marginHorizontal: '15%',
        lineHeight: 25,
        marginVertical: '2%'

    },
    shorttext: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Raleway-ExtraBold',
        textAlign: 'center',
        marginHorizontal: '15%',
        lineHeight: 25,
        marginTop: '15%'
    },
    ortext: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        marginHorizontal: '3%',

    },
    eyeimg: {
        width: 24,
        height: 24,
        position: 'absolute',
        bottom: 20,
        right: 45
    },
    continuebtn: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        height: 50,
        marginHorizontal: '23%',
        justifyContent: 'center',
        marginTop: '7%'
    },

    inpuTextViewStyle: {
        height: 40,

        marginHorizontal: '7%',
        marginVertical: '3%',
        color: '#FFFFFF'
    },

    input: {
        height: 40,
        borderBottomWidth: 0,
        padding: 10,
        flex: 1,
        color: '#FFFFFF'
    },

    underlineViewStyle: {
        height: 1,
        backgroundColor: '#fff'
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
    directionview: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textdirection: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: '5%'
    },
    textrember: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    textrember2: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
    },
    doestext: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    textsign: {
        color: '#00FF33',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
    },
    forgettext: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'right',
        marginLeft: '5%'
    },
    lineview: {
        flex: 1, height: 1.2, backgroundColor: '#ffffff'
    },
    logintext: {
        color: '#081D3D',
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 60,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center'
    }

});
export default styles