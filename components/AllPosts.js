import { View } from 'react-native';
import CommonContainer from './commonUISections/CommonContainer';
import { postLists } from '../posts';
import FlatListUI from './commonUISections/FlatListUI';
import { useNavigation } from '@react-navigation/native';

export default function AllPosts() {
  const navigation = useNavigation();

  return (
    <CommonContainer header={'Posts'}
      func={() => {
        navigation.goBack();
      }}
      childComponent={
        <View marginTop='4%'>
          <FlatListUI arrayList={postLists} />
        </View>
      } />
  );
}