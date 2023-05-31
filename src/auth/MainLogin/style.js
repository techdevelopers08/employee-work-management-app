import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({


    image: {
        flex: 1,
        justifyContent: 'center',
    },
    Logotext: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily:'Poppins-Regular',
        textAlign: 'center',
        marginHorizontal: '15%',
        lineHeight: 25,
        marginVertical: '2%'

    },
    ortext: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily:'Poppins-Regular',
        textAlign: 'center',
        marginHorizontal: '3%',

    },
    Login: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        height: 50,
        marginHorizontal: '23%',
        justifyContent: 'center',
        marginTop: '19%'
    },
    signup: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        height: 50,
        marginHorizontal: '23%',
        justifyContent: 'center',
        marginTop: '7%'
    },
    rowline: {
        flexDirection: 'row', alignItems: 'center',
        marginHorizontal: '8%',
        marginVertical: '6%'
    },
    lineview: {
        flex: 1, height: 1.2, backgroundColor: '#ffffff'
    },
    logintext: {
        color: '#081D3D',
        fontSize: 16,
        fontFamily:'Poppins-SemiBold',
        textAlign: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 60,
        fontFamily:'Poppins-SemiBold',
        textAlign: 'center'
    }

});
export default styles