import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import Colors from "../../constants/Colors";
import { getTextContrastColor } from "../../utils";

const CustomButton = ({
  text,
  onPress,
  disabled = false,
  color = "primary",
}) => {
  const backgroundColor = Colors[color];
  const textColor = getTextContrastColor(backgroundColor);

  return (
    <>
      {disabled == true ? (
        <TouchableOpacity
          disabled
          style={styles.containerDisabled}
          onPress={onPress}
        >
          <Text style={styles.buttonTextDisabled}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.container, { backgroundColor }]}
          onPress={onPress}
        >
          <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomButton;
