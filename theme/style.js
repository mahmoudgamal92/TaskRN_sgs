import { images, icons, COLORS, SIZES } from "./../constants";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F6FA",
      paddingHorizontal: 5
    },
    h1: {
      fontWeight: "bold",
      fontSize: 30,
      color: COLORS.black,
      paddingHorizontal: 20,
      marginVertical:20
    },
    searchInputText :{
        color:  COLORS.black,
        fontSize: 16,
        fontStyle: "italic",
        fontWeight: "semibold"
    },
    itemBox: {
      width: 200,
      backgroundColor: "#FFF",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      marginBottom: 20,
      borderRadius: SIZES.radius * 2
    },
    boxImage: {
      width: 175,
      height: 175,
      borderRadius: SIZES.radius * 2
    },
    searchInput: {
      borderRadius: 10,
      width: "80%",
      backgroundColor: "#FFF",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10
    },
    bestSellingItem: {
      flexDirection: "row",
      marginHorizontal: 10,
      padding: SIZES.radius,
      height: 110,
      borderRadius: 20,
      backgroundColor: COLORS.white,
      alignItems: "center",
      justifyContent: "space-between",
      width: 320
    },
    bestSellingItemBtn : {
      backgroundColor: COLORS.black,
      justifyContent: "center",
      alignItems: "center",
      height: 30,
      width: 30,
      borderRadius: 10
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
  
      elevation: 11
    }
  });

  export default styles;
