import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    Loremtext: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily:'Poppins-Regular',
        textAlign: 'center',
        marginHorizontal: '12%',
        lineHeight: 25,
        marginVertical: '8%'

    },
    
    continuebtn: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        height: 50,
        paddingHorizontal:'10%',
        marginHorizontal: '2%',
        justifyContent: 'center',
        
    },
    continuebtn2: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        height: 50,
        paddingHorizontal:'13%',
        marginHorizontal: '2%',
        justifyContent: 'center',
        
    },
    
    directionview:{
        flexDirection: 'row',
       alignItems:'center',
       marginVertical:'5%',
       marginHorizontal:'8%'
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
    termtext:{
        color: '#FFF',
        fontSize: 20,
        fontFamily:'Nunito-Bold',
        marginHorizontal:'8%',
        marginVertical:'4%'
    },
    textrember: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily:'Poppins-Regular',
    },
    textrember2: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily:'Poppins-Bold',
    },
    nulltext:{
        color: '#FFF',
        fontSize: 16,
        fontFamily:'Nunito-SemiBold',
        marginHorizontal:'8%'
    },

});
export default styles