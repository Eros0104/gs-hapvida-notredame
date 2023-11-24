import { View, Text, FlatList } from "react-native";
import availableServices from "./config";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { getTextContrastColor } from "../../utils"

const ServicesSection = ({}) => {
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        numColumns={2}
        keyExtractor={(item) => item.label}
        data={availableServices}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.item,
              index % 2 !== 0
                ? styles.secondColumnItem
                : styles.firstColumnItem,
            ]}
          >
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: item.backgroundColor,
                },
              ]}
            >
              <Ionicons name={item.icon} size={24} color={getTextContrastColor(item.backgroundColor)}  />
            </View>
            <Text style={styles.itemLabel}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ServicesSection;
