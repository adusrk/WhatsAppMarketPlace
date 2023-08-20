import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  groupBar: {
    backgroundColor: "#075E54",
    height: 70,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    paddingRight: 10,
  },
  backIcon: {
    color: "#FFF",
  },
  groupInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    overflow: "hidden",
    marginRight: 10,
  },
  iconImage: {
    width: "100%",
    height: "100%",
  },
  groupName: {
    color: "#FFF",
    fontSize: 19,
  },
  groupMember: {
    color: "white",
  },
  participants: {
    color: "#FFF",
    fontSize: 14,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  inp: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 50,
    height: 46,
    width: 335,
    backgroundColor: "white",
    borderBlockColor: "transparent",
  },
  input: {
    flex: 0.86,
    paddingHorizontal: 4,
    fontSize: 17,
  },
  sendButton: {
    backgroundColor: "#128C7E",
    borderRadius: 50,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 3,
  },
  microphoneIcon: {
    fontSize: 20,
  },
  smileyIcon: {
    marginTop: 9,
    marginLeft: 5,
  },
  clip: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: -20,
  },
  circularIcon: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#698894",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginRight: 5,
  },
  inr: {
    fontSize: 18,
    color: "white",
  },
  marketButton: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginRight: 5,
  },
  market: {
    fontSize: 20,
    color: "#698894",
  },
});
