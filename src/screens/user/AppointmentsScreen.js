import { StyleSheet, View, ScrollView } from "react-native";
import AppointmentCard from "../../components/AppointmentCard";
import { Text } from "react-native";
import { getRandomDateInFuture, getRandomTomorrowDateTime } from "../../utils";

const pendingStatus = "Pendente";
const confirmedStatus = "Confirmado";

const buttons = [
  {
    label: "Cancelar",
    onPress: () => console.log("Cancelado"),
  },
  {
    label: "Entrar",
    onPress: () => console.log("Entrar"),
  },
];

const rescheduleButtons = [
  {
    label: "Cancelar",
    onPress: () => console.log("Cancelado"),
  },
  {
    label: "Reagendar",
    onPress: () => console.log("Reagendado"),
  },
];

const doctorData = {
  name: "Dr. Pedro Henrique",
  expertise: "Cardiologista",
  profilePicture: require("../../assets/image/doctors/doctor-1.png"),
};

const doctorData2 = {
  name: "Dra. Ana Maria",
  expertise: "Pediatra",
  profilePicture: require("../../assets/image/doctors/doctor-2.png"),
};

const doctorData3 = {
  name: "Dra. Gabriela Silva",
  expertise: "Clínico Geral",
  profilePicture: require("../../assets/image/doctors/doctor-3.png"),
};

const generateSchedulingData = (status, customDate) => {
  const date = customDate ? customDate : getRandomDateInFuture(6);
  const day = date.getDate() + 1;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const hour = date.getHours();
  const minutes = date.getMinutes();

  return {
    date: `${day}/${month}/${year}`,
    time: `${hour}:${minutes}`,
    status,
  };
};

const AppointmentsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true} style={{ paddingHorizontal: 10 }}>
        <Text style={styles.title}>Amanhã</Text>
        <AppointmentCard
          buttons={buttons}
          doctorData={doctorData}
          schedulingData={generateSchedulingData(confirmedStatus, getRandomTomorrowDateTime())}
        />

        <Text style={styles.title}>Próximos</Text>
        <AppointmentCard
          buttons={rescheduleButtons}
          doctorData={doctorData2}
          schedulingData={generateSchedulingData(pendingStatus)}
        />

        <AppointmentCard
          buttons={rescheduleButtons}
          doctorData={doctorData3}
          schedulingData={generateSchedulingData(pendingStatus)}
        />

        <AppointmentCard
          buttons={rescheduleButtons}
          doctorData={doctorData2}
          schedulingData={generateSchedulingData(pendingStatus)}
        />
      </ScrollView>
    </View>
  );
};

export default AppointmentsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 0,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textDark,
    marginVertical: 10,
  },
});
