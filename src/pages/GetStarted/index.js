import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Animated,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {MyButton, MyGap} from '../../components';
import {colors} from '../../utils/colors';
import {color} from 'react-native-reanimated';
import {fonts} from '../../utils/fonts';

export default function GetStarted({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const bottom = new Animated.Value(windowWidth);
  const opacity = new Animated.Value(0);
  const top = new Animated.Value(0);

  Animated.timing(bottom, {
    toValue: 100,
    duration: 1200,
    useNativeDriver: false,
  }).start();

  Animated.timing(opacity, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  Animated.timing(top, {
    toValue: 50,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  return (
    <ImageBackground style={styles.page}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Image
          source={require('../../assets/beton.png')}
          resizeMode="contain"
          style={{
            top: windowHeight / 10,
            aspectRatio: 0.7,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            top: 120,
            fontSize: windowWidth / 5,
            fontFamily: fonts.secondary[900],
            color: colors.secondary,
            bottom: -40,
          }}>
          SOBAT
        </Text>
        <Text
          style={{
            top: 70,
            fontSize: windowWidth / 5,
            fontFamily: fonts.secondary[900],
            color: colors.primary,
          }}>
          BETON
        </Text>
        <Animated.Image
          source={require('../../assets/logo.png')}
          style={{
            top: '0%',
            opacity: opacity,
            aspectRatio: 1.4,
            resizeMode: 'center',
          }}
        />
      </View>

      <MyButton
        title="LOGIN"
        Icons="log-in"
        warna={colors.primary}
        onPress={() => navigation.navigate('Login')}
      />

      <MyGap jarak={20} />
      <MyButton
        title="REGISTER"
        Icons="book"
        warna={colors.secondary}
        onPress={() => navigation.navigate('Register')}
      />
      <Animated.View style={{height: top}} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    // backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
});
