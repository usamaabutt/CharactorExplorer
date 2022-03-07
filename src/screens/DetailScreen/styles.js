import { StyleSheet } from "react-native";
// import { HP, WP, size, colors } from "../../utilities";

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    width: 430,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  headerContainerText: {
    fontWeight: "400",
    fontSize: 25,
    color: "black",
    paddingLeft: 135,
  },
  backImageContainer: {
    height: 270,
    width: 430,
    backgroundColor: "grey",
  },

  imageContainer: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});

export default styles;
