import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { accountStyle } from '../components/platfromStyles/accountStyle';
import BackgroundScreen from './commonUISections/BackgroundScreen';
import { useNavigation } from '@react-navigation/native';

export default function VerifyPage() {
    const navigation = useNavigation();

    return (
        <BackgroundScreen component={
            <View>
                <View style={[styles.mainContainer, accountStyle.verifyContainer]} />
                <Text style={[accountStyle.accountText, styles.verifyText]}>VERIFICATION</Text>
                <View style={styles.secondContainer}>
                    <TextInput style={[accountStyle.inputStyle, accountStyle.loginInput]} placeholder='Email address' />
                    <Pressable style={[styles.buttonStyle, accountStyle.buttonStyle]}
                        onPress={
                            () => {
                                navigation.navigate('Login')
                            }
                        }
                    >
                        <Text style={styles.textStyle}>Verify</Text>
                    </Pressable>
                </View>
            </View>
        } />
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#BCD6ED",
        borderRadius: 200,
        width: 604.2,
        height: 600.34,
        transform: [{ rotate: "133.56deg" }],
        flexShrink: 0,
        opacity: 0.5,
        marginLeft: -90,
        marginTop: -320,
    },
    verifyText: {
        marginTop: Platform.OS === 'ios' ? 220 : 200,
        marginLeft: Platform.OS === 'ios' ? 110 : 112,
    },
    secondContainer: {
        position: 'absolute',
        top: 360,
        left: 90,
        elevation: 5,
        width: 250,
        height: 200
    },
    buttonStyle: {
        backgroundColor: '#CA377B',
        width: 120,
        height: 40,
        borderRadius: 20,
        marginLeft: Platform.OS === 'ios' ? 70 : 55,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        marginLeft: 32,
        marginTop: Platform.OS === 'ios' ? 6 : 5,
    }
});
