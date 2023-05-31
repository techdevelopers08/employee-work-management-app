import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        
        paddingHorizontal: '3%',
        alignItems: 'center',
        backgroundColor: '#0050C5',
        height: 70, borderBottomEndRadius: 25, borderBottomLeftRadius: 25
    },
    headertxt: {
        color: '#FFFFFF',
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        textAlign:'center'
    },
    profileview: {
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginTop: '5%',
    },
    profileimg: {
        width: 54, height: 54
    },
    textview:{
     marginHorizontal:'5%',
     alignSelf:'center'
    },
    fullnametxt: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#ffffff'
    },
    usertext: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#ffffff'
    },
    homeView:{
        marginHorizontal:'7%',
        marginTop:'3%',
    },
    lineView:{
        borderBottomWidth:1,
        borderBottomColor:'#ffffff',
        paddingVertical:'2%',
        marginVertical:'1%'
    },
    hometext:{
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#ffffff'
    }



});
export default styles