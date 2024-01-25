import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { commonStyle } from './platfromStyles/commonStyle';
import CommonContainer from './commonUISections/CommonContainer';

const img = require('../assets/postsPhotos/3.jpeg')

export default function EditPost() {
  return (
    <CommonContainer header={'Edit Post'} childComponent={
      <View style={commonStyle.container}>
        <Image source={img} style={commonStyle.addImg} />
        <Pressable>
          <Text >Add Image</Text>
        </Pressable>
        <TextInput placeholder='Write your post...' style={[commonStyle.textInput, commonStyle.shadowStyle]} multiline={true} />
        <Pressable style={[commonStyle.buttonStyle, commonStyle.shadowStyle]}>
          <Text style={commonStyle.textStyle}>Submit</Text>
        </Pressable>
      </View>
    } />
  );
}