import { StyleSheet, Text, TextInput, View, Pressable, Platform, Image, ScrollView } from 'react-native';
import CommonContainer from './commonUISections/CommonContainer';
import { commonStyle } from './platfromStyles/commonStyle';

const img = require('../assets/postsPhotos/3.jpeg')
export default function AddPost() {
  return (
    <CommonContainer header={'Add Post'} childComponent={
      <View style={commonStyle.container}>
        <Image source={img} style={commonStyle.addImg} />
        <Pressable>
        </Pressable>
        <TextInput placeholder='Write your post...' style={[commonStyle.textInput, commonStyle.shadowStyle]} multiline={true} />
        <Pressable style={[commonStyle.buttonStyle, commonStyle.shadowStyle]}>
          <Text style={commonStyle.textStyle}>Submit</Text>
        </Pressable>
      </View>
    } />
  );
}