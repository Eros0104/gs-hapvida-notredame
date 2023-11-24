import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  ScrollView,
} from "react-native";
import React from "react";
import { colors } from "../../constants";
import ServicesSection from "../../components/ServicesSection";
import NextAppointment from "../../components/NextAppointment";

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
    
      <View style={styles.bodyContainer}>
        <ScrollView nestedScrollEnabled={true} style={{ paddingHorizontal: 10 }}>
          <View style={styles.primaryTextContainer}>
            <Text style={styles.primaryText}>Serviços</Text>
          </View>
          <ServicesSection />

          <View style={styles.primaryTextContainer}>
            <Text style={styles.primaryText}>Próximos Agendamentos</Text>
          </View>
          <NextAppointment />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 0,
    flex: 1,
  },
  bodyContainer: {
    width: "100%",
    paddingBottom: 0,
    flex: 1,
  },
  primaryTextContainer: {
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  primaryText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  flatListContainer: {
    width: "100%",
    height: 50,
    marginTop: 10,
    marginLeft: 10,
  },
});
