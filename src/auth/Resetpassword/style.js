import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    Logotext: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'normal',
        textAlign: 'center',
        marginHorizontal: '15%',
        lineHeight: 25,
        marginVertical: '8%'

    },
    
    continuebtn: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        height: 50,
        marginHorizontal: '23%',
        justifyContent: 'center',
        marginTop: '7%'
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        padding: 10,
        borderColor: '#FFFFFF',
        marginHorizontal: '9%',
        marginVertical: '2%',
        
        color: '#FFFFFF'
    },
    
    directionview:{
        flexDirection: 'row',
       justifyContent:'center',
    },
    logintext: {
        color: '#081D3D',
        fontSize: 16,
        fontFamily:'Poppins-SemiBold',
        textAlign: 'center'
    },
    textreset: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom:'10%',
        fontFamily:'Nunito-ExtraBold',
    }

});
export default styles