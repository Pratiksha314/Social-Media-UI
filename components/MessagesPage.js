import { Platform, ScrollView, StyleSheet, Text, View, Image, FlatList, TextInput } from 'react-native';
import BackgroundScreen from './commonUISections/BackgroundScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { messagesList } from '../modals/messasges';
import { useNavigation } from '@react-navigation/native';

const profileImage = require('../assets/profilePhotos/profile5.jpeg');

export default function MessagesPage() {
  const navigation = useNavigation();
  return (
    <BackgroundScreen
      component={
        // <ScrollView>
        <View style={styles.backgroundContainer}>
          <View style={styles.chatContainer}>
            <View style={styles.chatHeader}>
              <View style={styles.subheader}>
                <Image source={profileImage} style={styles.profilePhoto} />
                <View style={styles.headerText}>
                  <Text style={styles.profilenameText}>Jeon Jungkook</Text>
                  <Text style={styles.usernameText}>Last seen 11:45 AM</Text>
                </View>
              </View>
              <Icon
                style={styles.icons}
                name={'times'}
                size={19}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <View style={styles.messagesContainer}>
              <ScrollView>

                <FlatList
                  data={messagesList[0].jk_jimin}
                  renderItem={({ item, index }) => {
                    return (
                      <View style={[styles.textContainer, item.senderUsername === 'jk' ? styles.leftsideMessage : styles.rightsideMessage]}>
                        <Text style={[styles.text, item.senderUsername === 'jk' ? styles.leftText : styles.rightText]}>{item.msg}</Text>
                      </View>
                    )
                  }} />
              </ScrollView>

            </View>
            <View style={styles.bottomContainer}>
              <Icon
                style={[styles.icons, styles.icon, styles.camera]}
                name={'camera'}
                size={14}
              />
              <View style={styles.inpuBtn}>
                <TextInput style={styles.inputField} placeholder='write your message...' />
                <Icon
                  style={[styles.icons, styles.icon, styles.send]}
                  name={'paper-plane'}
                  size={15}
                />
              </View>
            </View>
          </View>
        </View>
        // </ScrollView>
      }
    />
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'lightblue',
    padding: 16,
    marginTop: 52,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: Platform.OS === 'ios' ? 790 : 740,
  },
  chatContainer: {
    backgroundColor: '#E6EEFA',
    borderRadius: 50,
    height: Platform.OS === 'ios' ? 750 : 700,
    padding: 20,
  },
  chatHeader: {
    // backgroundColor: "pink",
    width: Platform.OS === 'ios' ? 350 : 310,
    height: 65,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: -12
  },
  subheader: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    width: 150,
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
    alignSelf: 'center'
  },
  profilenameText: {
    fontSize: 17,
    fontWeight: '700'
  },
  usernameText: {
    fontSize: 14,
    color: 'grey'
  },
  icons: {
    backgroundColor: '#BB5799',
    height: Platform.OS === 'ios' ? 40 : 38,
    width: Platform.OS === 'ios' ? 40 : 38,
    borderRadius: Platform.OS === 'ios' ? 20 : 100,
    fontSize: 20,
    padding: Platform.OS === 'ios' ? 10 : 9,
    paddingHorizontal: Platform.OS === 'ios' ? 12 : 11,
    overflow: 'hidden',
    color: 'white',
    alignSelf: 'center'
  },
  messagesContainer: {
    // backgroundColor: 'pink',
    maxHeight: Platform.OS === 'ios' ? 607 : 557,
    width: Platform.OS === 'ios' ? 399 : 361,
    // flexDirection: 'column-reverse',
    padding: 10,
    position: 'absolute',
    bottom: 80
  },
  textContainer: {
    backgroundColor: 'yellow',
    marginTop: 16,
    minWidth: 60,
    maxWidth: Platform.OS === 'ios' ? 280 : 260,
    padding: 13,
    borderRadius: Platform.OS === 'ios' ? 20 : 30.28,
  },
  text: {
    fontSize: 16,
  },
  leftsideMessage: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
  },
  rightsideMessage: {
    backgroundColor: '#BB5799',
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
  },
  leftText: {
    color: 'black'
  },
  rightText: {
    color: 'white'
  },
  bottomContainer: {
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: Platform.OS === 'ios' ? 400 : 350,
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inpuBtn: {
    flexDirection: 'row'
  },
  inputField: {
    backgroundColor: 'white',
    // height: 45,
    width: Platform.OS === 'ios' ? 252 : 212,
    borderRadius: 24,
    padding: 8,
  },
  icon: {
    height: Platform.OS === 'ios' ? 46 : 48,
    width: Platform.OS === 'ios' ? 46 : 48,
    borderRadius: Platform.OS === 'ios' ? 23 : 24,
  },
  camera: {
    paddingHorizontal: 13,
    paddingVertical: 14
  },
  send: {
    position: 'absolute',
    right: -10,
    paddingHorizontal: 12,
    paddingVertical: 12
  }
});