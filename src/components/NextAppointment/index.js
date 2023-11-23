import { View, Text, Image } from "react-native";
import styles from "./styles";
import doctorProfile from "../../assets/image/next-appointment-doctor.png";
import { Ionicons } from "@expo/vector-icons";

const NextAppointment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainArea}>
        <View style={styles.doctorProfilePictureContainer}>
          <Image source={doctorProfile} style={styles.doctorProfilePicture} />
        </View>
        <View style={styles.doctorDetailsContainer}>
          <Text style={styles.doctorName}>Dra. Ana Silva</Text>
          <Text>Clínica Médica</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>Confirmado</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.detailsTiming}>
          <Ionicons name={"time-outline"} size={20}  />
          <Text>15:30</Text>
        </View>

        <View style={styles.detailsTiming}>
          <Ionicons name={"calendar-outline"} size={20}  />
          <Text>27/11/2023</Text>
        </View>
      </View>
    </View>
  );
};

export default NextAppointment;
