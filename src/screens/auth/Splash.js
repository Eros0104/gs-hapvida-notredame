import { StyleSheet, Image, View } from "react-native";
import React, { useEffect } from "react";

import { colors } from "../../constants";
import logo from "../../assets/logo/logo-black.png";

const Splash = ({ navigation }) => {
  //method to fetch the authUser data from aync storage if there is any and login the Dashboard or Home Screen according to the user type
  _retrieveData = async () => {
    try {
      setTimeout(() => {
        navigation.replace("login"); // // navigate to login screen if there is no authUser store in aysnc storage
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  // check the authUser and navigate to screens accordingly on initial render
  useEffect(() => {
    _retrieveData();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  splashText: {
    color: colors.light,
    fontSize: 50,
    fontWeight: "bold",
  },
  logo: {
    resizeMode: "contain",
    width: 256,
    height: 256,
  },
});
