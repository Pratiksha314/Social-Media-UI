import { StyleSheet, Text, View, TextInput, Pressable, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { accountStyle } from '../components/platfromStyles/accountStyle';
import BackgroundScreen from './commonUISections/BackgroundScreen';
import { useNavigation } from '@react-navigation/native';

export default function SignupPage() {
    const navigation = useNavigation();
    return (
        <BackgroundScreen component={
            <ScrollView>
                <View>
                    <View style={[styles.mainContainer, accountStyle.signupContainer]} />
                    <Text style={[accountStyle.accountText, styles.signupText]}>SIGNUP</Text>
                    <View style={styles.secondContainer}>

                        <TextInput style={[accountStyle.inputStyle, accountStyle.loginInput]} placeholder='Email address' />
                        <TextInput style={[accountStyle.inputStyle, accountStyle.loginInput]} placeholder='Password' secureTextEntry />
                        <TextInput style={[accountStyle.inputStyle, accountStyle.loginInput]} placeholder='Confirm Password' secureTextEntry />
                        <Pressable style={[styles.buttonStyle, accountStyle.buttonStyle]}
                            onPress={() => {
                                navigation.navigate('Verify')
                            }}
                        >
                            <Text style={styles.textStyle}>Signup</Text>
                        </Pressable>

                    </View>
                </View>
            </ScrollView>
        }
        />
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#BCD6ED",
        borderRadius: 200,
        width: 703.238,
        height: 600,
        transform: [{ rotate: "48.823deg" }],
        flexShrink: 0,
        opacity: 0.5,
        marginLeft: -400,
    },
    signupText: {
        marginTop: 220,
        marginLeft: Platform.OS === 'ios' ? 55 : 70,
    },
    secondContainer: {
        position: 'absolute',
        top: Platform.OS === "android" ? 320 : 320,
        left: Platform.OS === "android" ? 40 : 30,
        elevation: 5,
        width: 250,
        height: 200
    },
    buttonStyle: {
        backgroundColor: '#CA377B',
        width: 120,
        height: 40,
        borderRadius: 20,
        marginLeft: 50
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        marginLeft: Platform.OS === 'ios' ? 26 : 29,
        marginTop: Platform.OS === 'ios' ? 6 : 5,
    }
});