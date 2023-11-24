import { StyleSheet } from "react-native";
import { colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f1f5fe",
    borderRadius: 16,
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: 170,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: colors.primary,
  },
  bannerText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  textContainer: {
    width: "55%",
    padding: 24,
    justifyContent: "center",
  },
  imageContainer: {
    width: "45%",
    flex: 1,
    height: 200,
    justifyContent: "flex-end"
  }
});

export default styles;
