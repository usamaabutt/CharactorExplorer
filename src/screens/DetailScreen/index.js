import * as React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DetailCard from "../../components/DetailCard";
import { Icon } from "react-native-elements";
import styles from "./styles";

export default ({ navigation, route }) => {
  const detail = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Icon
          onPress={() => navigation.navigate("Home")}
          name={"arrow-left"}
          type={"material-community"}
          color={"black"}
          size={30}
          style={{ padding: 10 }}
        />
        <Text style={styles.headerContainerText}>Details</Text>
      </View>
      <View style={styles.backImageContainer}>
        <Image
          source={{ uri: detail.img }}
          style={StyleSheet.absoluteFill}
          blurRadius={9}
        />
        <View>
          <Image source={{ uri: detail.img }} style={styles.imageContainer} />
        </View>
      </View>
      <View>
        <Image
          source={require("../../assets/images/7.jpeg")}
          style={StyleSheet.absoluteFill}
          blurRadius={9}
        />
        <ScrollView style={{ height: 600 }}>
          <DetailCard
            name={detail.name}
            ocupation={detail.occupation}
            status={detail.status}
            nickName={detail.nickname}
            appearance={detail.appearance}
          />
        </ScrollView>
      </View>
    </View>
  );
};
