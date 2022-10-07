import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useCallback } from 'react';
import { Text, View, Alert, Image } from 'react-native';
import DismissKeyboardView from '../components/DismissKeyboardView';
import RNBPressable from '../components/RNBPressable';
import TextInput from '../components/CustomTextInput';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = (props) => {
  // const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const onChangeEmail = useCallback((text) => {
    setEmail(text.trim());
  }, []);
  const onChangePassword = useCallback((text) => {
    setPassword(text.trim());
  }, []);

  const onSubmit = useCallback(async () => {
    if (loading) {
      return;
    }
    if (!email || !email.trim()) {
      return Alert.alert('알림', '이메일을 입력해주세요.');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요.');
    }
    // try {
    //   setLoading(true);
    //   const response = await axios.post(`${Platform.OS === 'ios' ? Config.API_URL_IOS : Config.API_URL_AOS}/login`, {
    //     email,
    //     password,
    //   });
    //   console.log(response.data);
    //   Alert.alert('알림', '로그인 되었습니다.');
    //   dispatch(
    //     userSlice.actions.setUser({
    //       name: response.data.data.name,
    //       email: response.data.data.email,
    //       accessToken: response.data.data.accessToken, // 유효기간 10분, 5분, 1시간등 회사정책에 따라 정함
    //     }),
    //   );
    //   // accessToken의 유효기간을 연장해준다. 유효기간 1일, 30일 1년등.
    //   // refreshToken은 해킹당하면 문제가커짐. EncryptedStorage로 안전하게 보관.
    //   await EncryptedStorage.setItem('refreshToken', response.data.data.refreshToken);
    // } catch (error) {
    //   const errorResponse = (error as AxiosError).response;
    //   if (errorResponse) {
    //     Alert.alert('알림', errorResponse.data.message);
    //   }
    // } finally {
    //   setLoading(false);
    // }
  }, [loading, email, password]);

  return (
    <SafeAreaView className="flex flex-1 items-center justify-center bg-white mt-5">
      <DismissKeyboardView className="flex h-full w-full px-5 bg-white rounded-lg">
        <View className="justify-center py-16">
          <View className="h-22 my-1">
            <Text className="text-4xl font-bold text-black pb-1">고품격 클라이밍 관리 앱</Text>
            <Text className="text-4xl font-bold text-black">영차영차</Text>
          </View>

          <View className="h-6 w-full">
            <Text className="text-base text-black font-normal">영차영차에서 소중한 클라이밍 정보를 관리하세요</Text>
          </View>
        </View>
        <View className="justify-center py-6">
          <View className="">
            <View>
              <TextInput
                icon={require('~assets/images/ico-id.png')}
                borderSquare
                className="h-14 my-1 rounded-lg bg-white pl-12"
                onChangeText={onChangeEmail}
                placeholder="이메일을 입력해주세요"
                placeholderTextColor="#666"
                importantForAutofill="yes"
                autoComplete="email"
                textContentType="emailAddress"
                value={email}
                returnKeyType="next"
                clearButtonMode="while-editing"
                ref={emailRef}
                onSubmitEditing={() => passwordRef.current?.focus()}
                blurOnSubmit={false}
              />
              <TextInput
                icon={require('~assets/images/ico-pw.png')}
                borderSquare
                className="h-14 my-1 rounded-lg bg-white pl-12"
                placeholder="비밀번호를 입력해주세요(영문,숫자,특수문자)"
                placeholderTextColor="#666"
                importantForAutofill="yes"
                onChangeText={onChangePassword}
                value={password}
                autoComplete="password"
                textContentType="password"
                secureTextEntry
                returnKeyType="send"
                clearButtonMode="while-editing"
                ref={passwordRef}
                onSubmitEditing={onSubmit}
              />
            </View>
            <RNBPressable
              onPress={() => {
                // navigation.navigate('MainTab', { ...props });
              }}
              className="justify-center items-center h-14 rounded-lg bg-primary my-1">
              <Text className="text-lg text-white font-medium">로그인</Text>
            </RNBPressable>
            <View className="flex flex-row pt-3 ml-3 justify-center items-center">
              <RNBPressable
                className="h-10 px-2 bg-white items-center justify-center mx-1"
                onPress={() => {
                  // push('UseTerms');
                }}>
                <Text className="text-ag-gray-800 font-normal">회원가입</Text>
              </RNBPressable>
              <View className="h-3 border-r border-ag-gray-400" />
              <RNBPressable
                className="h-10 px-2 bg-white items-center justify-center mx-1"
                onPress={async () => {
                  //   await requestChangeDisplayOrder();
                  Alert.alert('아이디찾기');
                }}>
                <Text className="text-ag-gray-800 font-normal">아이디찾기</Text>
              </RNBPressable>
              <View className="h-3 border-r border-ag-gray-400" />
              <RNBPressable
                className="h-10 px-2 bg-white items-center justify-center mx-1"
                onPress={async () => {
                  //   await requestChangeDisplayOrder();
                  Alert.alert('비밀번호 재설정');
                }}>
                <Text className="text-ag-gray-800 font-normal">비밀번호 재설정</Text>
              </RNBPressable>
            </View>
          </View>
        </View>
        <View className="flex-1 justify-center">
          <View className="items-center px-4">
            <RNBPressable className="justify-center h-12 w-full rounded-lg bg-yellow-400 my-1">
              <View className="flex-row items-center justify-center">
                <View className="w-full absolute justify-center">
                  <Image className="h-5 w-5 ml-6" source={require('~assets/images/logo-kakao.png')} />
                </View>
                <Text
                  onPress={async () => {
                    // console.log('메인');
                    // await setRootBottomTabs();
                  }}
                  className="text-base text-black font-medium">
                  카카오톡 로그인
                </Text>
              </View>
            </RNBPressable>
            <RNBPressable className="justify-center h-12 w-full rounded-lg bg-green-500 my-1">
              <View className="flex-row items-center justify-center">
                <View className="w-full absolute justify-center">
                  <Image className="h-5 w-5 ml-6" source={require('~assets/images/logo-naver.png')} />
                </View>
                <Text
                  onPress={async () => {
                    // navigation.navigate('RootStack');
                  }}
                  className="text-base text-white font-medium">
                  네이버 로그인
                </Text>
              </View>
            </RNBPressable>
            <RNBPressable className="justify-center h-12 w-full rounded-lg bg-white border border-gray-400 mt-1 mb-5">
              <View className="flex-row items-center justify-center">
                <View className="w-full absolute justify-center">
                  <Image className="h-5 w-5 ml-6" source={require('~assets/images/logo-google.png')} />
                </View>
                <Text
                  onPress={async () => {
                    // console.log('메인');
                    // await setRootBottomTabs();
                  }}
                  className="text-base text-black font-medium">
                  구글 로그인
                </Text>
              </View>
            </RNBPressable>
          </View>
        </View>
      </DismissKeyboardView>
    </SafeAreaView>
  );
};

export default SignIn;
