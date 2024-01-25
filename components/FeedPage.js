import { FlatList, StyleSheet, Text, View, Image, Platform, ScrollView } from 'react-native';
import FlatListUI from './commonUISections/FlatListUI';
import { postLists } from '../posts';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FeedPage() {
  return (
    <View marginTop='4%' >
      <View style={styles.head}>
        <Icon
          style={styles.icons}
          name={'camera'}
          size={19}
        />
        <Text style={styles.text}>Feed</Text>
        <Icon
          style={styles.icons}
          name={'bell'}
          size={19}
        />
      </View>
      <View style={styles.subhead}>
        <FlatList
          data={postLists}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <View style={styles.story}>
                <Image source={item.profilePhoto} style={styles.profilePhoto} />
                <Text style={styles.name}>{item.profilename}</Text>
              </View>
            )
          }} />
      </View>
      <View style={{ maxHeight: Platform.OS === 'ios' ? 598 : 549 }} >
        <ScrollView>

          <FlatListUI arrayList={postLists} />
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    // backgroundColor: 'pink',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 350,

  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center'
  },
  icons: {
    backgroundColor: '#E6EEFA',
    height: Platform.OS === 'ios' ? 46 : 48,
    width: Platform.OS === 'ios' ? 46 : 48,
    borderRadius: Platform.OS === 'ios' ? 23 : 24,
    overflow: 'hidden',
    paddingHorizontal: 14,
    paddingVertical: 13
  },
  subhead: {
    // backgroundColor: 'cyan',
    flexDirection: 'row',
    marginTop: 6
  },
  story: {
    // backgroundColor: 'yellow',
    padding: 10,
  },
  name: {
    alignSelf: 'center',
  },
  profilePhoto: {
    height: 68,
    width: 68,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: '#648FD9',
    alignSelf: 'center',
  },
});