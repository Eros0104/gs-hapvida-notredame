import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const itemWidth = 50;
const itemMargin = 3;

const halfItemMargin = itemMargin / 2;
const widthWithSubtractedMargin = itemWidth - halfItemMargin;

const innerBorderRadius = 5;
const itemPadding = 8;

const outerBorderRadius = innerBorderRadius + itemPadding;

const styles = StyleSheet.create({
  item: {
    width: `${widthWithSubtractedMargin}%`,
    padding: itemPadding,
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: outerBorderRadius,
    flexDirection: "row",
    alignItems: "center"
  },
  firstColumnItem: {
    marginRight: `${halfItemMargin}%`,
  },
  secondColumnItem: {
    marginLeft: `${halfItemMargin}%`,

  },
  itemSeparator: {
    height: 10
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: innerBorderRadius,
    alignItems: "center",
    justifyContent: "center"
  },
  itemLabel: {
    marginLeft: itemPadding
  }
});

export default styles;