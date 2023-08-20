import React, { useState, useRef } from "react";
import {
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  View,
  Modal,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Market from "./Market";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { Image } from "react-native";
import { FlatList, TextInput } from "react-native";
import Shop from "./Shop";
import Orders from "./Orders";
import Liked from "./Liked";
import Create from "./Create";
import Cart from "./Cart";

const Stack = createStackNavigator();

function AppScreen({ navigation }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

  const groupInfo = {
    groupName: "Lumos",
    participants: 3,
  };

  const messages = [
    { id: "1", text: "Welcome in our market place", sender: "user" },
    { id: "2", text: "Thank you", sender: "bot" },
    { id: "3", text: "It is great", sender: "bot" },
  ];

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    const scaleYValue = isDropdownVisible ? 0 : 1;
    Animated.spring(translateY, {
      toValue: scaleYValue,
      friction: 10,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
    Animated.spring(translateY, {
      toValue: 0,
      friction: 10,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("./assets/backk.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.groupBar}>
            <TouchableOpacity style={styles.backButton}>
              <FontAwesome name="arrow-left" size={20} color="white" />
            </TouchableOpacity>
            <View style={styles.groupInfo}>
              <View style={styles.groupIcon}>
                <Image
                  source={require("./assets/group.jpg")}
                  style={styles.iconImage}
                />
              </View>
              <View>
                <Text style={styles.groupName}>{groupInfo.groupName}</Text>
                <Text style={styles.groupMember}>
                  Adnan, Anand, Ankit, Raj, Rohit
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }} />
            <TouchableOpacity
              onPress={toggleDropdown}
              style={styles.dropdownButton}
            >
              <FontAwesome name="ellipsis-v" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={
                  item.sender === "user"
                    ? styles.userMessage
                    : styles.botMessage
                }
              >
                <Text>{item.text}</Text>
              </View>
            )}
          />
          <View style={styles.inputContainer}>
            <View style={styles.inp}>
              <FontAwesome
                name="smile-o"
                size={28}
                color="#698894"
                style={styles.smileyIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Type your message..."
                placeholderTextColor="#698894"
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("Market")}
                style={styles.marketButton}
              >
                <FontAwesome name="shopping-cart" style={styles.market} />
              </TouchableOpacity>
              <View style={styles.circularIcon}>
                <FontAwesome name="inr" style={styles.inr} />
              </View>
              <FontAwesome
                name="paperclip"
                size={24}
                color="#698894"
                style={styles.clip}
              />
            </View>
            <TouchableOpacity style={styles.sendButton}>
              <FontAwesome name="microphone" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
          <StatusBar barStyle="light-content" />
          <Modal
            animationType="none"
            transparent={true}
            visible={isDropdownVisible}
            onRequestClose={closeDropdown}
          >
            <TouchableWithoutFeedback onPress={closeDropdown}>
              <View style={styles.modalOverlay}>
                <Animated.View
                  style={[
                    styles.dropdown,
                    { transform: [{ scaleY: translateY }] },
                  ]}
                >
                  <Text>Market Place</Text>
                  <Text>Option 2</Text>
                  <Text>Option 3</Text>
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AppScreen" component={AppScreen} />
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Liked" component={Liked} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Create" component={Create} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
