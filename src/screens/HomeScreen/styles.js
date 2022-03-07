import { StyleSheet } from "react-native";
// import { HP, WP, size, colors } from "../../utilities";

const SPACING = 16;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 470,
    alignSelf: "center",
    borderRadius: 0,
    borderRadius: 190,
    justifyContent:'center',

  },
  headerTextContainer: {
    fontWeight: "700",
    fontSize: 35,
    textAlign: "left",
    marginLeft: 40,
    marginTop: 30,
  },
  searchContainer: {
    height: 80,
    width: 395,
    alignSelf: "center",
    borderRadius: 0,
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    alignItems: 'center',
    flexDirection:'row',
    

  },
  textInputContainer: {
    height: 70,
    width: 320,
    paddingLeft: 40,
    
    fontSize: 25,
    textAlign: "center",
  },
  imageContainer: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE / 1,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING / 2,
  },
});

export default styles;
