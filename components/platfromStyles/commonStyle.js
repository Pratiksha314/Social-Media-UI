import { StyleSheet, Platform } from "react-native";

export const commonStyle = StyleSheet.create({
    shadowStyle:{
        shadowColor: 'black',
        elevation: 5,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2}
      },
      container: {
        alignSelf: 'center',
        marginTop: 40,
        alignContent: 'center',
        // backgroundColor: 'grey',
        minHeight: Platform.OS === 'ios' ? 660 : 620,
      },
      buttonStyle: {
        backgroundColor: '#CA377B',
        width: 120,
        height: 40,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center'
      },
      addImg: {
        resizeMode: 'cover',
        width: Platform.OS === 'ios' ? 330 : 310,
        borderRadius: 30,
        alignSelf: 'center',
      },
      textInput: {
        minHeight: 171,
        width: Platform.OS === 'ios' ? 350 : 320,
        borderRadius: 29,
        backgroundColor: 'white',
        shadowColor: 'black',
        elevation: 5,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        marginTop: 7,
        padding: 30,
        fontSize: 12,
      },
      textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 6 : 5,
      },
      icon: {
        backgroundColor: '#E6EEFA',
        padding: 10,
        width: 40.42,
        height: 40.42,
        borderRadius: Platform.OS === 'ios' ? 20 : 50, 
        overflow: 'hidden'   
    }
})