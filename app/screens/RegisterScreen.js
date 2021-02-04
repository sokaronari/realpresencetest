import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Screen from "../components/Screen";
import { AppFormField, AppForm } from "../components/forms";
import * as Yup from "yup";
import colors from "../config/colors";
import RegisterButton from "../components/RegisterButton";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .label("Name"),
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(4)
    .label("Password")
});

function RegisterScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/applogo.png")} />

        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            icon="account"
            name="name"
            placeholder="Name"
            textContentType="name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            icon="email"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
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
          <RegisterButton />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: colors.welcomeSecondary
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 20
  }
});
export default RegisterScreen;
