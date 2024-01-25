import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import BackgroundScreen from './BackgroundScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { commonStyle } from '../platfromStyles/commonStyle';

export default function CommonContainer({ header, func, childComponent }) {
    return (
        <BackgroundScreen component={
            <ScrollView>

                <View style={styles.container}>
                    <View style={styles.backgroundContainer} />

                    <View style={styles.options}>
                        <Icon
                            style={commonStyle.icon}
                            name={'arrow-left'}
                            size={19}
                            onPress={func}
                        />
                        <Text style={styles.headerText}>{header}</Text>
                        <View></View>
                    </View>

                    {childComponent}
                </View>

            </ScrollView>
        }
        />
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196, 222, 245, 0.78)',
        borderTopLeftRadius: 50.47,
        borderTopRightRadius: 50.47,
        marginTop: 80
    },
    backgroundContainer: {
        opacity: 0.81,
        flex: 1,
        padding: 20,
        borderTopLeftRadius: 50.47,
        borderTopRightRadius: 50.47,
        minHeight: Platform.OS === 'ios' ? 794 : 720,
    },
    options: {
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios' ? -770 : -700,
        justifyContent: 'space-between',
        width: "90%",
        marginLeft: 10
    },
    headerText: {
        fontSize: 25,
        fontFamily: 'Times New Roman',
        fontWeight: "700"
    },
});