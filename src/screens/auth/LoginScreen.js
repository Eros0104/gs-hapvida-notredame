import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ProgressDialog from "react-native-progress-dialog";
import InternetConnectionAlert from "react-native-internet-connection-alert";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colors } from "../../constants";
import CustomInput from "../../components/CustomInput";
import header_logo from "../../assets/logo/ecomarket-logo-login.png";
import CustomButton from "../../components/CustomButton";
import CustomAlert from "../../components/CustomAlert/CustomAlert";

import user from "../../data/user";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  //method to store the authUser to aync storage
  _storeData = async (user) => {
    try {
      await AsyncStorage.setItem("authUser", JSON.stringify(user));
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  //method to validate the user credentials and navigate to Home Screen / Dashboard
  const loginHandle = async () => {
    setIsloading(true);

    await AsyncStorage.setItem("authUser", JSON.stringify(user)); // navigate to User Home screen

    setIsloading(false);

    navigation.replace("tab", { user });
  };

  return (
    <InternetConnectionAlert onChange={(connectionState) => {}}>
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView style={{ flex: 1, width: "100%" }}>
          <ProgressDialog visible={isloading} label={"Login ..."} />
          <StatusBar></StatusBar>

          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={header_logo} />
          </View>

          <View style={styles.welcomeContainer}>
            <View>
              <Text style={styles.welcomeText}>Tô com dor, Doutor!</Text>
              <Text style={styles.welcomeParagraph}>
                Facilitando Benefícios, Cuidando de Você.
              </Text>
            </View>
          </View>

          <View style={styles.screenNameContainer}>
            <Text style={styles.screenNameText}>Login</Text>
          </View>
          <View style={styles.formContainer}>
            <CustomAlert message={error} type={"error"} />
            <CustomInput
              value={email}
              setValue={setEmail}
              placeholder={"Usuário"}
              placeholderTextColor={colors.muted}
              radius={5}
            />
            <CustomInput
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
              placeholder={"Senha"}
              placeholderTextColor={colors.muted}
              radius={5}
            />
            <View style={styles.forgetPasswordContainer}>
              <Text
                onPress={() => navigation.navigate("forgetpassword")}
                style={styles.ForgetText}
              >
                Esqueceu sua senha?
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttomContainer}>
          <CustomButton text={"Login"} onPress={loginHandle} />
        </View>
        <View style={styles.bottomContainer}>
          <Text>Não tem conta?</Text>
          <Text
            onPress={() => navigation.navigate("signup")}
            style={styles.signupText}
          >
            Cadastre-se
          </Text>
        </View>
      </KeyboardAvoidingView>
    </InternetConnectionAlert>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 1,
  },
  welcomeContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "30%",
  },
  formContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    width: "100%",
    padding: 5,
  },
  logo: {
    resizeMode: "contain",
    width: 100,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.muted,
  },
  welcomeParagraph: {
    fontSize: 16,
    fontWeight: "300",
    color: colors.textDark,
  },
  forgetPasswordContainer: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ForgetText: {
    fontSize: 15,
    fontWeight: "600",
  },
  buttomContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  bottomContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    marginLeft: 2,
    color: colors.primary,
    fontSize: 15,
    fontWeight: "600",
  },
  screenNameContainer: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  screenNameText: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.muted,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
});
