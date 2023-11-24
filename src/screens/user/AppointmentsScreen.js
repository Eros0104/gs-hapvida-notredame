import { useState } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
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

const filterPills = [
  {
    label: "Todos",
  },
  {
    label: "Confirmados",
  },
  {
    label: "Pendentes",
  },
];

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

const schedulingData = generateSchedulingData(confirmedStatus, getRandomTomorrowDateTime());
const schedulingData2 = generateSchedulingData(pendingStatus);
const schedulingData3 = generateSchedulingData(pendingStatus);
const schedulingData4 = generateSchedulingData(pendingStatus);

const AppointmentsScreen = () => {
  const [activeFilter, setActiveFilter] = useState(filterPills[0].label);

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true} style={{ paddingHorizontal: 10 }}>
        <Text style={styles.mainTitle}>Agendas</Text>
        <View style={styles.filterPills}>
          {filterPills.map((pill, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterPill,
                activeFilter === pill.label ? {} : styles.disabledFilterPill,
              ]}
              onPress={() => setActiveFilter(pill.label)}
            >
              <Text style={styles.filterPillText}>{pill.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.title}>Amanhã</Text>
        <AppointmentCard
          buttons={buttons}
          doctorData={doctorData}
          schedulingData={schedulingData}
        />
        
        <Text style={styles.title}>Próximos</Text>
        <AppointmentCard
          buttons={rescheduleButtons}
          doctorData={doctorData2}
          schedulingData={schedulingData2}
        />

        <AppointmentCard
          buttons={rescheduleButtons}
          doctorData={doctorData3}
          schedulingData={schedulingData3}
        />

        <AppointmentCard
          buttons={rescheduleButtons}
          doctorData={doctorData2}
          schedulingData={schedulingData4}
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
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textDark,
    marginVertical: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  filterPills: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    gap: 16,
  },
  filterPill: {
    backgroundColor: colors.primary,
    borderRadius: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  disabledFilterPill: {
    backgroundColor: colors.light,
  },
});
