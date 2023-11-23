import Colors from "../../constants/Colors";
import { Dimensions } from "react-native";

const styles = {
  container: {
    backgroundColor: Colors.light,
    borderRadius: 10,
    padding: 18
  },
  mainArea: {
    paddingBottom: 5,
    flexDirection: "row"
  },
  details: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  detailsTiming: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  doctorDetailsContainer: {
    flex: 1,
    marginLeft: 12
  },
  doctorName: {
    fontWeight: "800"
  },
  statusContainer: {
  },
  status: {
    backgroundColor: "#eefdf3",
    color: "#117b34",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    overflow: 'hidden'
  },
  doctorProfilePictureContainer: {
  },
  doctorProfilePicture: {
    width: 42,
    height: 42,
    backgroundColor: "#f1f5fe",
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
  }
}

export default styles;