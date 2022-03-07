import React, { useEffect, useState } from "react";
import {
  Image,
  Animated,
  Text,
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import styles from "./styles";
import { Icon, CheckBox } from 'react-native-elements';

const { width, height } = Dimensions.get("screen");

const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: 123,
    image:
      "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    name: "Haseeb Butt",
    jobTitle: "RN Dev",
    email: "Haseeb@gmail.com",
  };
});
const SPACING = 16;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default ({ navigation }) => {
  const [details, setDetails] = useState();
  const [filteredDetails, setFilteredDetails] = useState();

  useEffect(() => {
    profileData();
  }, []);

  const profileData = () => {
    axios
      .get("https://breakingbadapi.com/api/characters")
      .then((res) => {
        setDetails(res.data);
        setFilteredDetails(res.data);
        setPortyard(res.data);
      })
      .catch((err) => {
      });
  };

  const hanldeChangeText = (text) => {
    const filteredDetails = details.filter(({ name }) => name.toLowerCase().includes(text.toLowerCase()));

    setFilteredDetails(filteredDetails);
  };

  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../assets/images/6.jpeg")}
        style={StyleSheet.absoluteFill}
        blurRadius={4}
      />
      <View style={styles.container}>
        <Text style={styles.headerTextContainer}>Breaking characters</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInputContainer}
          placeholder="Search here"
          keyboardType="default"
          placeholderTextColor="grey"
          flexDirection="row"
          textAlign="left"
          onChangeText={hanldeChangeText}
        ></TextInput>
                <Icon name={'account-search'} type={"material-community"} color={'grey'} size={30}  />

      </View>
      <Animated.FlatList
        data={filteredDetails}
        // data={portyard}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: 15,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.7),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailScreen", item)}
            >
              <Animated.View
                style={{
                  flexDirection: "row",
                  padding: SPACING,
                  marginBottom: SPACING,
                  backgroundColor: "white",
                  borderRadius: 16,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.6,
                  shadowRadius: 5,
                  opacity,
                  transform: [{ scale }],
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={styles.imageContainer}
                />
                <View>
                  <Text style={{ fontSize: 22, fontWeight: "600" }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 16, opacity: 0.7, marginTop: 3 }}>
                    {item.status}
                  </Text>
                  <Text
                    style={{ fontSize: 12, opacity: 0.7, color: "#0099cc" }}
                  >
                    {item.portrayed}
                  </Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
