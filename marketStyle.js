import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: "white",
  },
  columnContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  firstcol: {
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    height: 50,
  },
  secondcol: {
    // backgroundColor: "blue",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  thirdcol: {
    height: 300,
  },
  fourthcol: {
    paddingLeft: 5,
    height: 30,
  },

  fifthcol: {
    // backgroundColor: "pink",
    height: 110,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  sixthcol: {
    // backgroundColor: "orange",
    height: 105,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    height: 50,
    // backgroundColor: "gray",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  bottomSquare: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 45,
    height: 45,
    // backgroundColor: "#F4F3F3",
  },
  intro: {
    flexDirection: "row",
    alignItems: "center",
  },
  a: {
    marginLeft: 10,
    height: 48,
    width: 240,
  },
  group: {
    marginTop:5,
    fontSize: 18,
    fontWeight: "700",
  },
  members: {
    fontSize: 13,
    color: "grey",
  },
  b: {
    height: 35,
    width: 370,
    borderRadius: 50,
    backgroundColor: "#F1F6F9",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  imgfive: {
    height: 105,
  },
  Square: {
    height: 100,
    width: 95,
    // backgroundColor: "yellow",
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignItems: "center",
  },
  circ: {
    height: 90,
    width: 88,
    backgroundColor: "#F1F6F9",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  slideshowImage: {
    width: 320, // Adjust the width and height as needed
    height: 270,
    marginRight: 10, // Adjust the margin as needed
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 5, // Add border radius for rounded corners
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "grey",
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "green", // Change the color for active indicator
  },
  imgg: {
    width: 100,
    height: 100,
  },
  main: {
    height: 615,
    width: "auto",
    paddingHorizontal: 3,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 220,
    width: "auto",
  },
  subitem: {
    height: 200,
    width: 175,
    backgroundColor: "#F1F6F9",
    marginTop: 5,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  aitem: {
    height: 40,
    width: 170,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bitem: {
    height: 120,
    width: 170,
    alignItems: "center",
    justifyContent: "center",
  },
  citem: {
    height: 40,
    width: 170,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imgs: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 12,
    color: "green",
    fontWeight: "600", // Custom font weight
  },
  username: {
    color: "grey",
    fontWeight: "700", // Custom font weight
  },
  txt: {
    width: 60,
  },
  ic: {
    width: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  time: {
    color: "grey",
    fontSize: 15,
  },
  txt2: {
    width: 90,
    marginTop: -17,
  },
  ic2: {
    width: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  price: {
    fontSize: 17,
    marginTop: -4,
    color: "black",
  },
  tit: {
    fontSize: 13,
    color: "grey",
  },
  nme: {
    fontSize: 17,
    fontWeight: "500",
    color: "green",
  },
  addnew: {
    height: 450,
    borderRadius: 8,
    marginHorizontal: 4,
    marginVertical: 3,
    backgroundColor: "#F1F6F9",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputform: {
    borderRadius: 9,
    height: 37,
    backgroundColor: "#e1e7ea",
    width: 360,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  addpic: {
    height: 180,
    backgroundColor: "#e1e7ea",
    width: 180,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  piccc: {
    justifyContent: "space-evenly",
    width: 100,
    flexDirection: "row",
    marginTop: 15,
    fontSize: 17,
    color: "#698894",
  },
  adding: {
    borderRadius: 9,
    height: 37,
    backgroundColor: "green",
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  post: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  card:{
    marginTop:10,
    height:120,
    width:"auto",
    backgroundColor:"#F1F6F9",
    borderRadius: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  carda:{
    height:110,
    width: 100,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  cardb:{
    height:110,
    width: 120,
    // backgroundColor: "pink",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cardc:{
    height:110,
    width: 80,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  cardd:{
    height:110,
    width: 70,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  imgcart:{
    height: 100,
    width: 100,
  },
  typecart:{
    fontSize: 16,
    color: "#698894",

  },
  namecart:{
    fontSize:18,
    fontWeight: "600",
    color: "black",
  },
  quant:{
    fontSize: 14,
    color: "#698894",

  },
  qua:{
    fontSize: 15,
  },
  rupee:{
    fontSize: 24,
    color: "darkgreen",

  },
  cardpay:{
    marginTop:10,
    height:120,
    width:"auto",
    backgroundColor:"#F1F6F9",
    justifyContent: "space-between",
    flexDirection: "column",
    // alignItems: "center",
  },
  aa:{
    height:30,
    width:"auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  ab:{
    height:40,
    width:"auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  ac:{
    height:40,
    width:"auto",
    alignItems: "center",
    justifyContent: "center",
  },
  txtt:{
    fontSize:16,
    fontWeight: "600",
    color: "darkgreen",
  },
});
