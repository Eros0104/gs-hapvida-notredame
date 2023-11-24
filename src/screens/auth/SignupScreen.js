import {
  StyleSheet,
  Text,
  Image,
  StatusBar,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import InternetConnectionAlert from "react-native-internet-connection-alert";

import { colors } from "../../constants";
import CustomInput from "../../components/CustomInput";
import logo from "../../assets/logo/lettering-logo.png";
import CustomButton from "../../components/CustomButton";
import CustomAlert from "../../components/CustomAlert/CustomAlert";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: email,
    password: password,
    name: name,
    userType: "USER",
  });

  const signUpHandle = () => {
    if (email == "") {
      return setError("Por favor, insira seu email");
    }
    if (name == "") {
      return setError("Por favor, insira seu nome");
    }
    if (password == "") {
      return setError("Por favor, insira sua senha");
    }
    if (!email.includes("@")) {
      return setError("Email inválido");
    }
    if (email.length < 6) {
      return setError("Email é muito curto");
    }
    if (password.length < 5) {
      return setError("A senha deve ter no mínimo 5 caracteres");
    }
    if (password != confirmPassword) {
      return setError("As senhas não coincidem");
    }
  };
  return (
    <InternetConnectionAlert
      onChange={(connectionState) => {
        console.log("Connection State: ", connectionState);
      }}
    >
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar></StatusBar>
        <View style={styles.TopBarContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="arrow-back-circle-outline"
              size={30}
              color={colors.muted}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ flex: 1, width: "100%" }}>
          <View style={styles.welcomeContainer}>
            <Image style={styles.logo} source={logo} />
          </View>
          <View style={styles.screenNameContainer}>
            <View>
              <Text style={styles.screenNameText}>Criar Conta</Text>
            </View>
            <View>
              <Text style={styles.screenNameParagraph}>
                Crie sua conta no "To com dor Doutor" e assuma o controle da sua
                saúde.
              </Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <CustomAlert message={error} type={"error"} />
            <CustomInput
              value={name}
              setValue={setName}
              placeholder={"Nome"}
              placeholderTextColor={colors.muted}
              radius={5}
            />
            <CustomInput
              value={email}
              setValue={setEmail}
              placeholder={"Email"}
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
            <CustomInput
              value={confirmPassword}
              setValue={setConfirmPassword}
              secureTextEntry={true}
              placeholder={"Confirme sua senha"}
              placeholderTextColor={colors.muted}
              radius={5}
            />
          </View>
        </ScrollView>
        <View style={styles.buttomContainer}>
          <CustomButton text={"Cadastrar"} onPress={signUpHandle} />
        </View>
        <View style={styles.bottomContainer}>
          <Text>Já tem uma conta?</Text>
          <Text
            onPress={() => navigation.navigate("login")}
            style={styles.signupText}
          >
            Login
          </Text>
        </View>
      </KeyboardAvoidingView>
    </InternetConnectionAlert>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flexDirecion: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 1,
  },
  TopBarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  formContainer: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    width: "100%",
    flexDirecion: "row",
    padding: 5,
  },
  logo: {
    resizeMode: "contain",
    width: 200,
    height: 200,
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
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  screenNameText: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.muted,
  },
  screenNameParagraph: {
    marginTop: 5,
    fontSize: 15,
  },
});
