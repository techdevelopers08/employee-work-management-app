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
    dolarimg: {
        width: 20, height: 20,alignSelf:'center',marginTop:-35
    },
    rightimg: {
        width: 10, height: 17,
    },
    actulview: {
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowColor: '#000000',
        borderRadius: 10,
        justifyContent:'flex-end'
    },
    rdoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowColor: '#000000',
        marginHorizontal: '4%',
        borderRadius: 10,
        paddingRight: '3%', marginVertical: '2%'
    },
    rowview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems:'center',
        // marginHorizontal:'3%'
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
    ottxt: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#000000'
    },
    hrmttxt:{
        fontSize: 10,
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
    textpr: {
        fontSize: 14,
        fontFamily: 'Nunito-Bold',
        color: '#000000',
    },
   
    
    paidbtn: {
        backgroundColor: '#00CE67',
        padding: '3%',
        paddingHorizontal: '5%',
        borderRadius: 8,
       justifyContent:'center'
    },
    paidtxt: {
        fontSize: 8,
        fontFamily: 'Poppins-SemiBold',
        color: '#FFFFFF',
        textAlign: 'center',
    }

});
export default styles