import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { accountStyle } from '../components/platfromStyles/accountStyle';
import BackgroundScreen from './commonUISections/BackgroundScreen';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
    const navigation = useNavigation();

    return (
        <BackgroundScreen component={
            <View>
                <View style={[styles.mainContainer, accountStyle.loginContainer]} />
                <Text style={[accountStyle.accountText, styles.loginText]}>LOGIN</Text>
                <View style={styles.secondContainer}>
                    <TextInput style={[accountStyle.inputStyle, accountStyle.loginInput]} placeholder='Email address' />
                    <TextInput style={[accountStyle.inputStyle, accountStyle.loginInput]} placeholder='Password' secureTextEntry />
                    <Pressable style={[styles.buttonStyle, accountStyle.buttonStyle]}
                        onPress={
                            () => {
                                navigation.navigate('Navigation')
                            }
                        }
                    >
                        <Text style={styles.textStyle}>Login</Text>
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
        width: 667.548,
        height: 686.787,
        transform: [{ rotate: "42.51deg" }],
        flexShrink: 0,
        opacity: 0.5,
        marginLeft: 140,
    },
    loginText: {
        marginTop: 232,
        marginLeft: Platform.OS === 'ios' ? 250 : 200,
    },
    secondContainer: {
        position: 'absolute',
        top: Platform.OS === "android" ? 320 : 340,
        left: Platform.OS === "android" ? 120 : 150,
        elevation: 5,
        width: 250,
        height: 200
    },
    buttonStyle: {
        backgroundColor: '#CA377B',
        width: 120,
        height: 40,
        borderRadius: 20,
        marginLeft: 60
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        marginLeft: Platform.OS === 'ios' ? 32 : 34,
        marginTop: Platform.OS === 'ios' ? 6 : 5,
    }
});
