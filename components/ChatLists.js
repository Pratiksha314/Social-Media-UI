import { Platform, FlatList, Image, StyleSheet, Text, TextInput, View, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { messageTiles } from '../modals/messasges';
import { useNavigation } from '@react-navigation/native';

export default function ChatLists() {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.headerContainer}>
                <Icon
                    name={'arrow-left'}
                    size={19}
                />
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Messages</Text>
                <Text></Text>
            </View>
            <View style={styles.backgroundDesign1}></View>
            <View style={[styles.backgroundDesign1, styles.backgroundDesign2]}></View>
            <View style={styles.backgroundDesign3}></View>
            <View style={styles.searchbar}>
                <Icon style={styles.searchicon}
                    name={'search'}
                    size={30}
                />
                <TextInput placeholder='Search for contacts' style={{ marginLeft: 20 }} />
                <View></View>
            </View>
            <View style={styles.list}>
                <ScrollView>

                    <FlatList
                        data={messageTiles}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable
                                    onPress={
                                        () => {
                                            navigation.navigate('Messages')
                                        }
                                    }
                                >
                                    <View style={styles.msgContainer}>
                                        <Image source={item.profilePhoto} style={styles.profilePhoto} />

                                        <View style={styles.header}>
                                            <View style={styles.headerText}>
                                                <Text style={styles.profilenameText}>{item.profilename}</Text>
                                                <Text style={styles.lastestmsgText}>{item.latestMsg}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Pressable>


                            );

                        }}

                    />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    backgroundDesign1: {
        width: 726.35,
        height: 782.66,
        transform: [{ rotate: "40.78deg" }],
        borderRadius: 122,
        borderWidth: 1,
        borderColor: 'grey',
        position: 'absolute',
        marginTop: 170,
        marginLeft: -150,
    },
    backgroundDesign2: {
        marginTop: 210
    },
    backgroundDesign3: {
        backgroundColor: 'linear-gradient(180deg, rgba(108, 17, 130, 0.12) 18%, rgba(141, 177, 226, 0.20) 58%)',
        width: 733.67,
        height: 748.85,
        transform: [{ rotate: "46.258deg" }],
        borderRadius: 122,
        borderWidth: 1,
        borderColor: 'grey',
        position: 'absolute',
        marginTop: 270,
        marginLeft: -165,
    },
    searchbar: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignContent: 'center',
        backgroundColor: 'white',
        borderWidth: 0.4,
        borderColor: 'grey',
        alignSelf: 'center',
        shadowColor: 'grey',
        opacity: 1,
        shadowOpacity: 1,
        shadowOffset: { width: 4, height: 4 },
        elevation: 100,
        width: Platform.OS === 'ios' ? 340 : 320,
        height: 60,
        marginTop: 140,
        borderRadius: 18
    },
    searchicon: {
        marginTop: 15,
        marginLeft: 30,
    },
    list: {
        // backgroundColor: 'green',
        alignItems: 'center',
        marginTop: 20,
        maxHeight: Platform.OS === 'ios' ? 500 : 450,
    },
    msgContainer: {
        backgroundColor: '#F9F7F7',
        borderRadius: 20,
        width: Platform.OS === 'ios' ? 390 : 350,
        minHeight: Platform.OS === 'ios' ? 90 : 76,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 4,
    },
    profilePhoto: {
        marginTop: -4,
        marginLeft: Platform.OS === 'ios' ? 20 : 26,
        height: 70,
        width: 70,
        borderRadius: 200,
        alignSelf: 'center',
    },
    headerText: {
        justifyContent: 'center',
        // backgroundColor: 'cyan',
        marginLeft: 10,
        minWidth: 138,
        maxWidth: Platform.OS === 'android' ? 268 : 288,
    },
    header: {
        // backgroundColor: "pink",
        // width: Platform.OS === 'android' ? 220 : null,
        height: 60,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    profilenameText: {
        fontSize: 16,
        fontWeight: '800'
    },
    lastestmsgText: {
        paddingHorizontal: 5,
    }
});