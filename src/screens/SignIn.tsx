import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useRef, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { signin, signup } from '../actions/user';

interface SignInProps {
  navigation?: any;
  route?: any;
}

const SignIn: React.FC<SignInProps> = ({ navigation, route }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSignup } = route.params ?? {};
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const createChangeTextHandler = (name: 'email' | 'password' | 'confirmPassword' | 'name') => (value: string) => {
    setForm({ ...form, [name]: value });
  };

  // 로그인
  const onSubmitLogin = () => {
    console.log(form);

    const params = {
      email: form.email,
      password: form.password,
    };

    dispatch(signin(params)).then((response) => {
      if (response.payload?.status === 200) {
        Alert.alert('로긴 되었슴둥.');
        // navigation.navigate('Main');
      } else {
        Alert.alert('아이디 또는 비밀번호가 정확하지 않슴둥.');
      }
    });
  };

  // 회원가입
  const onSubmitSignup = () => {
    const params = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    dispatch(signup(params)).then((response) => {
      if (response.payload?.status === 200) {
        Alert.alert('회원가입 되었슴둥.');
        // navigation.navigate('Main');
      } else {
        Alert.alert('아이디 또는 비밀번호가 정확하지 않슴둥.');
      }
    });
  };

  const passwordRef = useRef<TextInput>();
  const confirmPasswordRef = useRef<TextInput>();

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.select({ ios: 'padding' })}>
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.text}>영차영차</Text>

        <View style={styles.form}>
          <BorderedInput
            hasMarginBottom
            placeholder="이름"
            value={form.name}
            onChangeText={createChangeTextHandler('name')}
          />

          <BorderedInput
            hasMarginBottom
            placeholder="이메일"
            value={form.email}
            onChangeText={createChangeTextHandler('email')}
          />

          <BorderedInput
            placeholder="비밀번호"
            hasMarginBottom={isSignup}
            value={form.password}
            onChangeText={createChangeTextHandler('password')}
            ref={passwordRef}
            returnKeyType={isSignup ? 'next' : 'done'}
            onSubmitEditing={() => {
              if (isSignup) {
                confirmPasswordRef.current?.focus();
              } else {
                onSubmit();
              }
            }}
            secureTextEntry
          />

          {isSignup && (
            <BorderedInput
              placeholder="비밀번호 확인"
              value={form.confirmPassword}
              onChangeText={createChangeTextHandler('confirmPassword')}
              ref={confirmPasswordRef}
              returnKeyType="done"
              secureTextEntry
            />
          )}

          <View style={styles.buttons}>
            {isSignup ? (
              <>
                <CustomButton title="회원가입" hasMarginBottom onPress={onSubmitSignup} />
                <CustomButton
                  title="로그인"
                  theme="secondary"
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </>
            ) : (
              <>
                <CustomButton title="로그인" hasMarginBottom onPress={onSubmitLogin} />
                <CustomButton
                  title="회원가입"
                  theme="secondary"
                  onPress={() => {
                    navigation.push('SignIn', { isSignup: true });
                  }}
                />
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
});

export default SignIn;
