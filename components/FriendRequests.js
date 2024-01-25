import { FlatList, StyleSheet, Text, View, Image, Platform } from 'react-native';
import CommonContainer from './commonUISections/CommonContainer';
import { commonStyle } from './platfromStyles/commonStyle';
import { friendRequestsList } from '../modals/friendRequestsLists';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FriendRequests() {
  return (
    <CommonContainer header={'Friend Request'} childComponent={
      <View style={commonStyle.container}>
        <FlatList
          data={friendRequestsList}
          renderItem={({ item }) => {
            return (
              <View style={styles.requestContainer}>
                <Image source={item.profilePhoto} style={styles.profilePhoto} />

                <View style={styles.header}>
                  <View style={styles.headerText}>
                    <Text style={styles.profilenameText}>{item.profilename}</Text>
                    <Text style={styles.usernameText}>{item.username}</Text>
                  </View>
                </View>

                <View style={styles.iconContainer}>
                  <Icon
                    style={[styles.acceptIcon, styles.icons]}
                    name={'check'}
                  />
                  <Icon
                    style={[styles.icons, styles.rejectIcon]}
                    name={'times'}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    }
    />
  )
}

const styles = StyleSheet.create({
  requestContainer: {
    backgroundColor: '#F9F7F7',
    borderRadius: 100,
    width: Platform.OS === 'ios' ? 390 : 370,
    minHeight: Platform.OS === 'ios' ? 40 : 46,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 4
  },
  profilePhoto: {
    marginTop: -4,
    marginLeft: Platform.OS === 'ios' ? -11 : -7,
    height: 70,
    width: 70,
    borderRadius: 200,
    // borderWidth: 2,
    // borderColor: 'white'
  },
  headerText: {
    justifyContent: 'center',
    // backgroundColor: 'cyan',
    marginLeft: 10,
    minWidth: 138,
    maxWidth: 142
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
    fontSize: 15,
    fontWeight: '800'
  },
  usernameText: {
    fontSize: 14,
    color: 'grey'
  },
  iconContainer: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
    width: 120,
    alignSelf: 'center',
  },
  icons: {
    height: 40,
    width: 40,
    borderRadius: Platform.OS === 'ios' ? 20 : 100,
    fontSize: 20,
    padding: 10,
    overflow: 'hidden',
    color: 'white'
  },
  acceptIcon: {
    backgroundColor: '#3A9D38',
  },
  rejectIcon: {
    backgroundColor: '#C12843',
    paddingHorizontal: 13,
  }
});