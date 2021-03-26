import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {color} from 'react-native-reanimated';
import {getData} from '../../utils/localStorage';
import {PermissionsAndroid} from 'react-native';

export default function Splash({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const bottom = new Animated.Value(windowWidth);
  const opacity = new Animated.Value(0);
  const bottomImage = new Animated.Value(-windowWidth);
  const bottomSun = new Animated.Value(-windowWidth);

  Animated.timing(bottom, {
    toValue: 0,
    duration: 1200,
    useNativeDriver: false,
  }).start();

  Animated.timing(opacity, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: false,
  }).start();

  Animated.timing(bottomImage, {
    toValue: -50,
    duration: 1300,
    useNativeDriver: false,
  }).start();

  Animated.timing(bottomSun, {
    toValue: 0,
    duration: 1300,
    useNativeDriver: false,
  }).start();

  useEffect(() => {
    const unsubscribe = getData('user').then(res => {
      console.log(res);
      if (!res) {
        // console.log('beum login');

        setTimeout(() => {
          navigation.replace('GetStarted');
        }, 2000);
      } else {
        console.log('sudah login logon');

        setTimeout(() => {
          navigation.replace('MainApp');
        }, 2000);
      }
    });
  }, []);
  return (
    <SafeAreaView style={styles.page}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
          padding: 20,
        }}>
        <Animated.Text
          style={{
            marginTop: 20,
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 22,
            color: colors.primary,
            bottom: bottom,
          }}>
          Aplikasi Hitung Resiko Retak dari PT Solusi Bangun Beton
        </Animated.Text>

        <Animated.View
          style={{
            width: windowWidth,
            // borderRadius: 80 / 2,
            right: bottomSun,
            // bottom: bottomImage,
            // margin: 10,
            height: 10,
            backgroundColor: colors.primary,
          }}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <Text
          style={{
            fontSize: windowWidth / 5,
            fontFamily: fonts.secondary[900],
            color: colors.secondary,
            bottom: -40,
          }}>
          SOBAT
        </Text>
        <Text
          style={{
            fontSize: windowWidth / 5,
            fontFamily: fonts.secondary[900],
            color: colors.primary,
          }}>
          BETON
        </Text>
        <Animated.Image
          source={require('../../assets/logo.png')}
          style={{
            top: '-15%',
            opacity: opacity,
            aspectRatio: 1.4,
            resizeMode: 'center',
          }}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <Animated.Image
          resizeMode="contain"
          source={require('../../assets/building.png')}
          style={{
            marginBottom: bottomImage,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    // backgroundColor: colors.primary,
    flex: 1,
  },
  image: {
    // aspectRatio: 1,
  },
});
