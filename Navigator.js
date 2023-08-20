import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Market from "./Market";
import Shop from "./Shop";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Market">
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="Shop" component={Shop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
