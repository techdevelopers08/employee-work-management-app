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
        paddingVertical: '2%',
        marginHorizontal: '4%',
        marginVertical: '1%',
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
        marginHorizontal: '4%',
        marginVertical: '3%'
    },
    formrowview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '2%',
        marginHorizontal:'3%'
    },
    formrowviewcolor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '2%',
        backgroundColor: '#0050C5',
    },

    yestext: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: '#FFFFFF',
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
    totaltxt: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#FFFFFF',
        alignSelf:'center'
    },
    yesbtncolor: {
        backgroundColor: '#e6f0ff',
        borderRadius: 5,
        padding: '1%',
        paddingHorizontal: '5%',
        justifyContent: 'center'
    },
    yesbtn: {
        backgroundColor: '#4d94ff',
        borderRadius: 5,
        padding: '1%',
        paddingHorizontal: '5%',
        justifyContent: 'center'
    },
    yesbtn2: {
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
    jantext: {
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
    numtext: {
        paddingHorizontal: '2%',
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        color: '#000000',
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
        paddingHorizontal: '2%',
        justifyContent: 'center',
    },
    timebtn: {
        backgroundColor: '#0050C5',
        justifyContent: 'center',
        borderRadius: 8,
        padding: '1%',
        paddingHorizontal: '2%'
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



});
export default styles