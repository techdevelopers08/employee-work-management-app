import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    sucesstext: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily:'Poppins-Regular',
        textAlign: 'center',
        marginHorizontal: '20%',
        lineHeight: 25,
    },
    checkimg:{
     alignSelf:'center'
    },
    continuebtn: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        height: 50,
        marginHorizontal: '23%',
        justifyContent: 'center',
        marginTop: '7%'
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
    textsuce: {
        color: '#FFFFFF',
        fontSize: 40,
        textAlign: 'center',
        fontFamily:'Poppins-SemiBold'

    }

});
export default styles