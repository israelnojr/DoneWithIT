import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";
import {
  AppForm,
  AppFormField,
  AppSubmitButton,
  ErrorMessage,
} from "../components/form";
import { defaultStyles } from "../config";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AuthContext from "../auth/context";
import AuthStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().max(25).label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});
function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    const res = await authApi.userLogin(email, password);
    if (!res.ok) return setLoginFailed(true);

    const token = res.data.token;
    const user = await authApi.getUser(token);
    if (!user.ok) return setLoginFailed(true);

    setLoginFailed(false);
    authContext.setUser(user.data);
    AuthStorage.storeToken(res.data.token);
  };
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../asset/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          style={styles.loginFailed}
          error="Invalid credentials, email or password"
          visible={loginFailed}
        />
        <AppFormField
          name="email"
          autoCapitalise="none"
          icon="email-outline"
          placeholder="Enter Email"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          maxLength={25}
        />
        <AppFormField
          name="password"
          autoCapitalise="none"
          icon="lock-outline"
          placeholder="Enter Password"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
        />
        <AppSubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: defaultStyles.Colors.background,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  loginFailed: {
    textAlign: "center",
  },
});
