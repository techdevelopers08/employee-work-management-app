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
        marginVertical:'10%'
    },
    
    logintext: {
        color: '#000000',
        fontSize: 16,
        fontFamily:'Poppins-SemiBold',
        textAlign: 'center'
    },
    textreset: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily:'Nunito-SemiBold',
        textAlign: 'center',
        marginHorizontal:'15%'
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