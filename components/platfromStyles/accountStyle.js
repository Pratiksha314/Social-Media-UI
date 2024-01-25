import { StyleSheet, Platform } from 'react-native';

export const accountStyle = StyleSheet.create({
    loginContainer: {
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOpacity: 1,
                shadowOffset: { width: 2, height: 2 },
                marginTop: 75,
            },
            android: {
                marginTop: 50,
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 200,
                elevation: 5,
            },
        }),
    },

    signupContainer:{
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOpacity: 1,
                shadowOffset: { width: 3, height: 3 },
                marginTop: 95,
            },
            android: {
                marginTop: 90,
                borderWidth: 2,
                borderColor: 'grey',
                borderRadius: 200,
                elevation: 5,
            },
        }),
    },

    verifyContainer:{
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOpacity: 1,
                shadowOffset: { width: 4, height: 3, },
            },
            android: {
                borderWidth: 4,
                borderColor: 'grey',
                borderRadius: 200,
                elevation: 5,
            },
        }),
    },

    loginInput: {
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "black",
                shadowOpacity: 0.5,
            },
            android: {
                elevation: 5,
                width: 230
            },
        }),
    },

    buttonStyle:{
        backgroundColor: '#CA377B',
        ...Platform.select({
            ios:{
                marginTop:30,
            },
            android: {
                marginTop:30,
            },
        }),       
    },

// common styles 
    accountText: {
        fontSize: 30,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        position: 'absolute',
        marginTop: 220,
        marginLeft:  Platform.OS === 'ios' ? 250: 200,
        elevation: 5,
    },
    inputStyle: {
        backgroundColor: "white",
        marginTop: 15,
        height: 50,
        borderRadius: 24,
        paddingLeft: 18,
        fontWeight: '600'
    },

});