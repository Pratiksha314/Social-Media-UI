import { StyleSheet, Text, View, FlatList, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FlatListUI({ arrayList }) {
    return (
        <FlatList
            data={arrayList}
            renderItem={({ item, index }) => {
                return (

                    <View style={styles.singleContainer}>

                        <View style={styles.header}>

                            <View style={styles.subheader}>
                                <Image source={item.profilePhoto} style={styles.profilePhoto} />
                                <View style={styles.headerText}>
                                    <Text style={styles.profilenameText}>{item.profilename}</Text>
                                    <Text style={styles.usernameText}>{item.username}</Text>
                                </View>
                            </View>

                            <Icon
                                style={styles.dots}
                                name={'ellipsis-v'}
                                size={19}
                            />
                        </View>

                        <Image source={item.urlP} style={styles.photoPost} />
                        <Text style={styles.dataText}>{item.data}</Text>
                        <View style={styles.bottomContainer}>
                            <View style={styles.subcontainer}>
                                <Icon
                                    style={styles.icons}
                                    name={'heart'}
                                    color={'#FB132F'}
                                    size={20}
                                />
                                <Text style={styles.numText}>{item.numOfLikes}</Text>
                            </View>
                            <View style={styles.subcontainer}>
                                <Icon
                                    style={styles.icons}
                                    name={'comment'}
                                    color={'white'}
                                    size={20}
                                />
                                <Text style={styles.numText}>{item.numOfComments}</Text>

                            </View>
                        </View>
                    </View>
                );

            }}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    singleContainer: {
        borderRadius: 40.38,
        alignSelf: 'center',
        backgroundColor: '#E6EEFA',
        minHeight: 400,
        width: Platform.OS === "ios" ? 390 : 350,
        paddingVertical: 25,
        paddingHorizontal: 28,
        marginTop: 2,
        marginBottom: 10,
        borderBottomWidth: 45,
        borderColor: 'rgba(5, 19, 94, 0.46)'
    },
    header: {
        // backgroundColor: "pink",
        width: Platform.OS === 'ios' ? 350 : 310,
        height: 50,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subheader: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        width: 150,
        justifyContent: 'space-between',
    },
    headerText: {
        justifyContent: 'center',
        // backgroundColor: 'cyan',
        marginLeft: 10,
        minWidth: 150
    },
    profilePhoto: {
        height: 50,
        width: 50,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: 'white',
    },
    profilenameText: {
        fontSize: 16,
        fontWeight: '800'
    },
    usernameText: {
        fontSize: 14,
        color: 'grey'
    },
    middleContainer: {
        backgroundColor: 'white',
        marginTop: 10,
        height: 252,
        borderRadius: 30,
    },
    photoPost: {
        height: Platform.OS === 'ios' ? 270 : 240,
        width: Platform.OS === 'ios' ? 360 : 320,
        alignSelf: 'center',
        resizeMode: 'cover',
        borderRadius: 30.28,
        overflow: 'hidden'
    },
    bottomContainer: {
        flexDirection: 'row',
        // backgroundColor: '#696969',
        position: 'absolute',
        bottom: -34,
        width: 300,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
    },
    subcontainer: {
        flexDirection: 'row',
        // backgroundColor: 'pink',
        width: 56,
        justifyContent: 'space-between'
    },
    numText: {
        fontSize: 17,
        color: "white",
        fontWeight: '800',
        alignSelf: 'center',
        zIndex: 1,
    },
    dataText: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '500'
    }
});