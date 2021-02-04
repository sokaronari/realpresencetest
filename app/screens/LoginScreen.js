import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import Screen from '../components/Screen';
import AuthContext from '../auth/context';
import {
  AppFormField,
  AppForm,
  ErrorMessage,
  SubmitButton,
} from '../components/forms';
import * as Yup from 'yup';
import colors from '../config/colors';
import authApi from '../api/auth';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required()
    .label('username'),
  password: Yup.string()
    .required()
    .label('Password'),
});

function LoginScreen() {
  const authContext = useContext(AuthContext);

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({username, password}) => {
    const result = await authApi.login(username, password);
    console.warn(result);
    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    const userData = result.data;
    authContext.setUserData(userData);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/applogo.png')} />
        <AppForm
          initialValues={{username: '', password: ''}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <ErrorMessage
            error="invalid username/password"
            visible={loginFailed}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            icon="account"
            name="username"
            placeholder="Username"
            textContentType="name"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            name="password"
            secureTextEntry={true}
            textContentType="password"
          />
          <SubmitButton
            buttonText="Login"
            color={colors.white}
            textColor={colors.welcomePrimary}
            marginTop={20}
          />
        </AppForm>
      </View>

      {/* <ImageBackground
        style={{
          width: "100%",
          height: 150,
          bottom: 0
        }}
        source={require("../assets/login-bottom.png")}
      /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: colors.welcomeSecondary,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
});

export default LoginScreen;
