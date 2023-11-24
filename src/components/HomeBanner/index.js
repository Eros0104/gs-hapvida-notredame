import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import bannerImage from "../../assets/image/banners/doctor-banner.png";
import CustomButton from "../CustomButton";

const BannerComponent = () => {

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Exames de Sangue</Text>
        <Text style={styles.bannerText}>50% de desconto</Text>
        <CustomButton text={"Agendar"} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={bannerImage} />
      </View>
    </View>
  );
};

export default BannerComponent;
