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
        height: 70, 
        borderBottomEndRadius: 25, 
        borderBottomLeftRadius: 25
    },
    headertxt: {
        color: '#FFFFFF',
        fontFamily: 'Nunito-Bold',
        fontSize: 20
    },
    settingView: {
        margin: '6%'
    },
    
    uperarrowimg: {
        width: 20, height: 12, margin: 10, alignSelf: 'center'
    },
    
    actulview: {
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowColor: '#000000',
        borderRadius: 10,
        padding: '5%', paddingVertical: '5%',
        marginHorizontal: '4%',   
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
        alignItems:'center',
        marginVertical: '3%'
    },
    

    dolrtext: {
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        color: '#FFFFFF',
        paddingHorizontal: '4%',
        textAlign: 'center'
    },
    
    tourlenttxt: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000'
    },
    ratetext: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#000000'
    },
    
    yesbtn: {
        backgroundColor: '#0050C5',
        borderRadius: 5,
        padding: '1%',
        paddingHorizontal: '5%',
        justifyContent: 'center'
    },
  

    settingtext: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: '#0050C5',

    },


});
export default styles