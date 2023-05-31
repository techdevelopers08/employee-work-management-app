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
    performview: {
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowColor: '#000000',
        borderRadius: 10,
        marginHorizontal:'4%',
        padding:'4%',marginVertical:'3%'
    },
    rdoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowColor: '#000000',
        marginHorizontal: '4%',
        borderRadius: 10,
        padding: '4%', marginVertical: '2%',
        marginTop:'3%'
    },
    
    travelmainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '2%',
        marginHorizontal:'5%'
    },

    performtxt: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000'
    },
    rdotext: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#0050C5'
    },
    addbtn: {
        backgroundColor: '#0050C5',
        borderRadius: 5,
        padding: '1%',
        paddingHorizontal: '2%',
        justifyContent: 'center',
        marginTop:'25%'
    },
    addtext: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        color: '#FFFFFF',
        paddingHorizontal: '2%',
        textAlign: 'center'
    },
    
    fromtotxt: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#000000'
    },
    takingtxt:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#000000',
        textAlign:'center'
    },
    notestxt:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#000000',
    },
    
    
    
   
    
    

});
export default styles