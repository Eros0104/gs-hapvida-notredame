import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../CustomButton";

const AppointmentCard = ({ buttons, doctorData, schedulingData }) => {
  return (
    <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.mainArea}>
            <View style={styles.doctorProfilePictureContainer}>
              <Image
                source={doctorData.profilePicture}
                style={styles.doctorProfilePicture}
              />
            </View>
            <View style={styles.doctorDetailsContainer}>
              <Text style={styles.doctorName}>{doctorData.name}</Text>
              <Text>{doctorData.expertise}</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.status}>{schedulingData.status}</Text>
            </View>
          </View>
          <View style={styles.details}>
            <View style={styles.detailsTiming}>
              <Ionicons name={"time-outline"} size={20} />
              <Text>{schedulingData.time}</Text>
            </View>

            <View style={styles.detailsTiming}>
              <Ionicons name={"calendar-outline"} size={20} />
              <Text>{schedulingData.date}</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          {buttons.map((button, index) => (
            <View
              style={[
                styles.buttonContainer,
                index === 0 ? styles.leftButton : styles.rightButton,
              ]}
            >
              <CustomButton
                key={button.label}
                text={button.label}
                onPress={button.onPress}
                color={index === 0 ? "light" : "primary"}
              />
            </View>
          ))}
        </View>
    </View>
  );
};

export default AppointmentCard;
