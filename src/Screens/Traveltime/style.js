import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    image: {
        flex: 1,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '3%',
        alignItems: 'center',
        backgroundColor: '#0050C5',
        height: 70, borderBottomEndRadius: 25, borderBottomLeftRadius: 25
    },
    headertxt: {
        color: '#FFFFFF',
        fontFamily: 'Nunito-Bold',
        fontSize: 20
    },
    titlemain: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: '3%',
        marginTop: '5%'
    },
    titlemaintext: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: '4%',
        marginTop: '2%'
    },
    clockimg: {
        width: 35, height: 35, margin: 10, alignSelf: 'center'
    },
    tittleView: {
        width: 75,
        height: 75,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: '2%',
        elevation: 5, justifyContent: 'center',
        shadowColor: '#000000',
    },
    overtxt: {
        fontSize: 10, marginTop: '5%',
        fontFamily: 'Nunito-Bold',
        color: '#000000', textAlign: 'center'
    },
    tittleViewcolor: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        backgroundColor: '#0050C5',
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000000',
    },
    actulview: {
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowColor: '#000000',
        borderRadius: 10,
        padding: '5%', paddingVertical: '5%',
        marginHorizontal: '4%',
        marginVertical: '2%',
        marginTop: '5%',
    },
    countView: {
        elevation: 0,
        shadowColor: '#000000',
        borderRadius: 5,
        padding: '2%',
        paddingHorizontal: '4%',
        borderWidth: 1,
        borderColor: '#0050C5',
        marginHorizontal: '1%'
    },
    counttext: {
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        color: '#0050C5',
    },
    notesView: {
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowColor: '#000000',
        marginHorizontal: '4%',
        borderRadius: 10, paddingHorizontal: '4%',
        padding: '3%', marginVertical: '2%'
    },
    emailView: {
        backgroundColor: '#ffffff', width: '47%',
        elevation: 5,
        shadowColor: '#000000',
        marginHorizontal: '1%',
        borderRadius: 10, paddingHorizontal: '4%',
        padding: '4%', marginVertical: '2%'
    },
    rdoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowColor: '#000000',
        marginHorizontal: '4%',
        borderRadius: 10, paddingHorizontal: '4%',
        padding: '3%', marginVertical: '2%'
    },
    rowview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems:'center',
        marginHorizontal: '3%'
    },
    formrowview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '2%'

    },

    yestext: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: '#FFFFFF',
        paddingHorizontal: '5%',
        textAlign: 'center'
    },
    notext: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: '#0050C5',
        paddingHorizontal: '5%',
        textAlign: 'center'
    },
    noroundtext: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: '#0050C5',
        paddingHorizontal: '1%',
        textAlign: 'center'
    },
    actualtext: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#0050C5'
    },
    rdotext: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#0050C5'
    },
    commandtext: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        color: '#0050C5',
        alignSelf: 'center'
    },
    tymopbtn: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: '1%',
        paddingHorizontal: '1%',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000000',
    },
    outtext: {
        fontSize: 9,
        fontFamily: 'Poppins-Medium',
        color: '#FFFFFF',
        paddingHorizontal: '5%',
        textAlign: 'center'
    },
    outbtn: {
        width: 70,
        backgroundColor: '#0050C5',
        borderRadius: 5,
        padding: '1%',
        //paddingHorizontal: '1%',

    },
    yesbtn: {
        backgroundColor: '#0050C5',
        borderRadius: 5,
        padding: '1%',
        paddingHorizontal: '5%',
        justifyContent: 'center'
    },
    nobtn: {
        borderWidth: 1,
        borderColor: '#0050C5',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: '1%',
        paddingHorizontal: '5%',
        justifyContent: 'center', marginLeft: '5%'
    },
    rowbtn: {
        flexDirection: 'row', justifyContent: 'flex-end'
    },
    rowbtntime: {
        flexDirection: 'row',
    },
    fromtext: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#000000'
    },
    acttimeView: {
        borderWidth: 1,
        borderColor: '#0050C5',
        borderRadius: 5,
        padding: 2,
        backgroundColor: '#0050C5'
    },
    overViermain: {
        marginHorizontal: '5%',
        marginVertical: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    whitetimetext: {
        paddingHorizontal: '4%',
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        color: '#FFFFFF',
        marginVertical: '2%'
    },
    txtovertime: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000'
    },
    totalView: {
        borderWidth: 1,
        borderColor: '#0050C5',
        borderRadius: 5,
        padding: 2,
        backgroundColor: '#0050C5'
    },
    whitetime: {
        paddingHorizontal: '4%',
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        color: '#FFFFFF',
        marginVertical: '2%'
    },
    DataView: {
        borderWidth: 1,
        borderColor: '#0050C5',
        borderRadius: 5,
        padding: 2, marginHorizontal: '1%'
    },
    datetext: {
        paddingHorizontal: '4%',
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        color: '#cccccc',
        marginVertical: '2%',
        textAlign: 'center'
    },
    datetext2: {
        paddingHorizontal: '4%',
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        color: '#000000',
        marginVertical: '2%',
        textAlign: 'center'
    },
    cashmain: {
        flexDirection: 'row', justifyContent: 'space-between',
    },
    cashbtn: {
        borderWidth: 1,
        borderColor: '#0050C5',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: '1%',
        paddingHorizontal: '5%',
        justifyContent: 'center',
    },
    timebtn: {
        backgroundColor: '#0050C5',
        justifyContent: 'center',
        borderRadius: 8,
        padding: '1%',
        paddingHorizontal: '5%'
    },
    input: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#E9E9E9',
        padding: 10,
        borderColor: '#000000',
        marginVertical: '1%',
    },
    inputcmd: {
        width: 80,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#E9E9E9',
        padding: 5, paddingLeft: 8,
        borderColor: '#000000',
        marginVertical: '1%',
    },
    cashtext: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: '#0050C5',
        textAlign: 'center', paddingHorizontal: '5%'
    },
    timetxt: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: '#FFFFFF',
        paddingHorizontal: '7%'
    },
    arrowimg: {
        width: 6,
        height: 12,
        margin: '1%',
        //alignSelf:'center'
    },
    appoxiView: {
        marginHorizontal: '5%',
        marginVertical: '1%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    appoxiText: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#000000'
    },
    nextbtn: {
        backgroundColor: '#00A816',
        padding: '2%',
        paddingHorizontal: '14%',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    nexttxt: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    modalbtn: {
        backgroundColor: '#0050C5',
        padding: '2%',
        paddingHorizontal: '14%',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: '4%'
    },
    modalnullatxt: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#000000',
        textAlign: 'center',
    },
    modalsavedtxt: {
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        textAlign: 'center'
    },
    sucess: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    }

});
export default styles