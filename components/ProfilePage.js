import { StyleSheet, Text, View, Image, ScrollView, Pressable, Platform } from 'react-native';
import PostsPhoto from './PostsPhoto';
import BackgroundScreen from './commonUISections/BackgroundScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { commonStyle } from './platfromStyles/commonStyle';

const profileImage = require('../assets/profilePhotos/profile5.jpeg');

export default function ProfilePage() {
    return (
        <BackgroundScreen component={
            <ScrollView>

                <View style={styles.iconsContainer}>
                    <Icon
                        style={commonStyle.icon}
                        name={'arrow-left'}
                        size={19}
                    />
                    <Icon
                        style={[commonStyle.icon, styles.dots]}
                        name={'ellipsis-v'}
                        size={20}
                    />
                </View>
                <Image source={profileImage} style={styles.profileimage} />

                <View style={styles.profileContainer}>
                    <View style={styles.infoContainer}>
                        <View style={styles.followNum}>
                            <Text style={styles.textNum}>7.13 k</Text>
                            <Text style={styles.textNum}>570</Text>
                        </View>
                        <View style={styles.follow}>
                            <Text>Followers</Text>
                            <Text>Following</Text>
                        </View>
                        <Text style={styles.username}>@Jack125</Text>
                        <Text style={styles.bio}>My name is Jack. I like dancing in the rain and travelling all around the world.</Text>
                        <View style={styles.buttonContainer}>
                            <Pressable>
                                <Text style={styles.buttonText}>Follow</Text>
                            </Pressable>

                            <Pressable>
                                <Text style={[styles.buttonText, { backgroundColor: 'white' }, { color: 'black' }]}>Message</Text>
                            </Pressable>

                        </View>

                    </View>
                </View>

                <PostsPhoto />

            </ScrollView>
        } />


    );
}
const styles = StyleSheet.create({
    profileimage: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 127,
        height: 100,
        width: 100,
        zIndex: 1,
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 5,
        resizeMode: "cover",
    },
    profileContainer: {
        padding: 25,
        backgroundColor: "#E6EEFA",
        marginTop: 170,
        borderRadius: 50.4,
        minHeight: 330,
    },
    infoContainer: {
        height: 230,
        marginTop: 15,
    },
    followNum: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 260,
        alignSelf: 'center'
    },
    follow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 280,
        paddingLeft: 10,
        alignSelf: 'center'
    },
    textNum: {
        fontSize: 15,
        fontWeight: '700',
    },
    username: {
        alignSelf: 'center',
        padding: 15,
        fontWeight: '800',
        fontSize: 17,
    },
    bio: {
        alignSelf: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        width: 280,
        marginTop: 15,
    },
    buttonText: {
        backgroundColor: '#BB5799',
        height: 40,
        width: 121,
        padding: 10,
        color: "white",
        borderRadius: 20.19,
        textAlign: 'center',
        shadowColor: 'black',
        opacity: 1,
        elevation: 8,
        shadowOpacity: 0.4,
        shadowOffset: { width: 1, height: 1 },
        overflow: 'hidden'

    },
    iconsContainer: {
        marginTop: 18,
        padding: 15,
        width: Platform.OS === 'ios' ? 430 : 390,
        flexDirection: 'row',
        position: 'absolute',
        // backgroundColor: 'pink',
        justifyContent: 'space-between'
    },
    dots: {
        paddingLeft: 18
    }
});
