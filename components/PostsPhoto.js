import { Platform, Pressable, StyleSheet, Image, View, FlatList } from 'react-native';
import { postLists } from '../posts';
import { useNavigation } from '@react-navigation/native';

const postImage = require('../assets/profilePhotos/profile5.jpeg');
export default function PostsPhoto() {
    const navigation = useNavigation();

    return (
        <View style={styles.postsContainer}>
            <FlatList
                numColumns={2}
                data={postLists}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable
                            onPress={
                                () => {
                                    navigation.navigate('AllPosts')
                                }
                            }
                        >
                            <Image source={item.urlP} style={[styles.photo, (index != 0 && index != 1) ? styles.photo : (index == 0 ? styles.photo1 : styles.photo2)]} />
                        </Pressable>
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    postsContainer: {
        position: 'relative',
        backgroundColor: 'white',
        marginTop: Platform.OS === "ios" ? -78 : -70,
        borderRadius: 50.47,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        minHeight: 500,
        borderWidth: 8,
        borderColor: "white",
        flex: 1,
        gap: 2,
    },
    photo: {
        height: 200,
        width: Platform.OS == 'ios' ? 200 : 182,
        resizeMode: 'cover',
        margin: 4,
        alignSelf: 'auto'
    },
    photo1: {
        borderTopLeftRadius: 40,
    },
    photo2: {
        borderTopRightRadius: 40,
    },

});