import React, { useState, useContext } from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppSubmitButton,
  ErrorMessage,
} from "../components/form";
import authApi from "../api/auth";
import { defaultStyles } from "../config";
import userApi from "../api/users";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().max(100).label("Full Name"),
  email: Yup.string().required().email().max(25).label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});
function RegisterScreen(props) {
  const auth = useAuth();
  const [error, setError] = useState();
  const registerApi = useApi(userApi.register);
  const loginApi = useApi(authApi.userLogin);

  const handleSubmit = async (userInfo) => {
    const res = await registerApi.request(userInfo);

    if (!res.ok) {
      if (res.data) setError(res.data.error);
      else {
        setError("An unexpected eror occured");
        console.log(res);
      }
      return;
    }
    const token = await loginApi.request(userInfo.email, userInfo.password);
    const authToken = token.data.token;
    auth.logIn(authToken);
  };
  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.screen}>
        <View style={styles.formContainer}>
          <AppForm
            initialValues={{ email: "", password: "", fullName: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <ErrorMessage error={error} visible={error} />
            <AppFormField
              name="fullName"
              autoCapitalise="none"
              icon="human"
              placeholder="Enter Full Name"
              autoCorrect={false}
              keyboardType="text"
              maxLength={25}
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
            <AppSubmitButton title="Register" />
          </AppForm>
        </View>
      </Screen>
    </>
  );
}

export default RegisterScreen;
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: defaultStyles.Colors.background,
  },
  formContainer: {
    marginTop: 30,
  },
});
