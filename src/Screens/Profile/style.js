import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
   
    continuebtn: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        height: 50,
        paddingHorizontal:'10%',
        marginHorizontal: '20%',
        justifyContent: 'center',
        marginTop:'5%'
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        padding: 10,
        borderColor: '#FFFFFF',
        marginHorizontal: '9%',
        marginVertical: '3%',
        color: '#FFFFFF'
    },
    logintext: {
        color: '#000000',
        fontSize: 16,
        fontFamily:'Poppins-SemiBold',
        textAlign: 'center'
    },
    textreset: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily:'Nunito-Bold',
        textAlign: 'center',
        
    },
    profileview:{
        width:120,
        height:120,
        borderWidth:2,
        borderRadius:4,
        borderColor:'#ffffff',
        alignSelf:'center',
        marginVertical:'4%',
        marginTop:'13%'
    },
    plus:{
        fontSize:60,
        fontFamily:'Poppins-Regular',
        color:'#ffffff',
        textAlign:'center'
    },
    addtext:{
        fontSize:12,
        fontFamily:'Poppins-Regular',
        color:'#FFFFFF',
        textAlign:'center',
        marginTop:-25,

    }

});
export default styles