import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const DetailCard = ({ name, ocupation, status, nickName, appearance }) => {
  return (
    <View>
      <View style={styles.nameContainer}>
        <Text style={styles.text1Container}>Name</Text>
        <Text style={styles.text1Container}>{name}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.text1Container}>Ocupation</Text>
        <Text style={styles.text1Container}>{ocupation}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.text1Container}>Status</Text>
        <Text style={styles.text1Container}>{status}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.text1Container}>Nick Name</Text>
        <Text style={styles.text1Container}>{nickName}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.text1Container}>Season Appearance</Text>
        <Text style={styles.text1Container}>
          {appearance.map((item) => {
            return item + ",";
          })}
        </Text>
      </View>
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  nameContainer: {
    height: 80,
    width: 430,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  text1Container: {
    fontWeight: "400",
    fontSize: 25,
    textAlign: "left",
    marginLeft: 20,
    color: "white",
  },
});
