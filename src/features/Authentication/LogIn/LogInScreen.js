import React, { useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { GoogleSignin } from '@react-native-community/google-signin';
import {
  onFacebookButtonPress,
  onGoogleButtonPress,
  onKakaoButtonPress,
  onNaverButtonPress,
} from '~/services/Authentication';

import LoginButton from '~/components/Authentication/LoginButton';

LogInScreen.propTypes = {
  navigation: PropTypes.object,
};

import {
  AuthenticationTitle,
  AuthenticationTitleContainer,
  AuthenticationSubTitle,
  AuthenticationLayout,
} from '../../../components/Authentication/AuthenticationLayout';

import { useTheme } from '@react-navigation/native';

const SNSColors = {
  kakao: '#FFE502',
  naver: '#1FC800',
  facebook: '#1A76F2',
  google: '#FFFFFF',
};

export default function LogInScreen({ navigation }) {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '288981239410-78k5bk1ue8eru4dkhj05dasv7mkm2njv.apps.googleusercontent.com',
    });
  }, []);

  const { colors } = useTheme();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <AuthenticationLayout>
          <AuthenticationTitleContainer>
            <AuthenticationTitle color={colors.black}>
              WAKE UP에
            </AuthenticationTitle>
            <AuthenticationTitle
              color={colors.black}
              style={{ marginBottom: 10 }}>
              오신 것을 환영합니다.
            </AuthenticationTitle>
            <AuthenticationSubTitle>
              제주도의 와이파이 서비스, 웨이크업입니다.
            </AuthenticationSubTitle>
          </AuthenticationTitleContainer>

          <View style={{ marginTop: 10 }}>
            <LoginButton
              backgroudColor={SNSColors.kakao}
              fontColor={colors.black}
              title={'카카오톡으로 시작하기'}
              onPress={async () =>
                await onKakaoButtonPress().then(() =>
                  console.log('kakao login success!'),
                )
              }
            />
            <LoginButton
              backgroudColor={SNSColors.naver}
              fontColor={colors.white}
              title={'네이버로 시작하기'}
              onPress={async () =>
                await onNaverButtonPress().then(() =>
                  console.log('naver login success!'),
                )
              }
            />
            <LoginButton
              backgroudColor={SNSColors.facebook}
              fontColor={colors.white}
              title={'페이스북으로 시작하기'}
              onPress={async () =>
                await onFacebookButtonPress().then(() =>
                  console.log('Signed in with Facebook!'),
                )
              }
            />
            <LoginButton
              backgroudColor={SNSColors.google}
              fontColor={colors.black}
              title={'구글로 시작하기'}
              style={{ borderWidth: 1, borderColor: colors.gray }}
              onPress={async () =>
                await onGoogleButtonPress().then(() =>
                  console.log('Signed in with Google!'),
                )
              }
            />

            <View
              style={{
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => navigation.push('EmailLogIn')}>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    color: colors.black,
                  }}>
                  이메일로 계속하기
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </AuthenticationLayout>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
