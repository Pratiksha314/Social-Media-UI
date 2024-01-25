import { ImageBackground, StyleSheet } from 'react-native';

const bgImg = require('../../assets/images/backgroungImage.png')

export default function BackgroundScreen({ component }) {
  return (
    <ImageBackground source={bgImg} style={styles.img}>
      {component}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    height: "100%",
    width: "100%",
  }
});