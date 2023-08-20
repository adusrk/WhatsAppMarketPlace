import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native"; // Import ScrollView
import marketStyle from "./marketStyle";
import { FontAwesome } from "@expo/vector-icons";

const Liked = ({ navigation }) => {
  return (
    <View style={marketStyle.container}>
      <View style={marketStyle.columnContainer}>
        <View style={marketStyle.firstcol}>
          <View style={marketStyle.intro}>
            <FontAwesome
              name="truck"
              size={28}
              color="green"
              style={marketStyle.mar}
            />
            <View style={marketStyle.a}>
              <Text style={marketStyle.group}>Lumos</Text>
              <Text style={marketStyle.members}>
                Adnan, Anand, Ankit, Raj, Rohit
              </Text>
            </View>
          </View>
          <FontAwesome
            name="map-marker"
            size={28}
            color="green"
            style={marketStyle.smileyIcon}
          />
          <TouchableOpacity onPress={() => navigation.navigate("AppScreen")}>
            <FontAwesome
              name="whatsapp"
              size={28}
              color="green"
              style={marketStyle.smileyIcon}
            />
          </TouchableOpacity>
          <FontAwesome
            name="user"
            size={28}
            color="green"
            style={marketStyle.smileyIcon}
          />
        </View>
        
      <View style={marketStyle.secondcol}>
        <View style={marketStyle.b}>
          <TextInput placeholder="    Search - Find it all here                                  " />
          <FontAwesome
            name="search"
            size={20}
            color="green"
            style={marketStyle.smileyIcon}
            paddingHorizontal={15}
          />
          <FontAwesome
            name="microphone"
            size={20}
            color="green"
            style={marketStyle.smileyIcon}
          />
        </View>
      </View>
      <View style={marketStyle.fourthcol}>
          <Text style={marketStyle.group}>My Wishlists</Text>
        </View>
      <ScrollView style={marketStyle.main}>
        <View style={marketStyle.item}>
        <View style={marketStyle.subitem}>
              <View style={marketStyle.aitem}>
                <View style={marketStyle.txt}>
                  <Text style={marketStyle.title}>Posted by</Text>
                  <Text style={marketStyle.username}>Raj</Text>
                </View>
                <View style={marketStyle.ic}>
                  <FontAwesome
                    name="clock-o"
                    size={22}
                    color="#698894"
                    style={marketStyle.smileyIcon}
                  />
                  <Text style={marketStyle.time}>7d</Text>
                  <FontAwesome
                    name="heart"
                    size={22}
                    color="red"
                    style={marketStyle.smileyIcon}
                  />
                </View>
              </View>
              <View style={marketStyle.bitem}>
                <Image
                  source={require("./assets/cauli.png")}
                  resizeMode="contain"
                  style={marketStyle.imgs}
                />
              </View>
              <View style={marketStyle.citem}>
                <View style={marketStyle.txt2}>
                  <Text style={marketStyle.tit}>Vegetable</Text>
                  <Text style={marketStyle.nme}>Cauliflower</Text>
                </View>
                <View style={marketStyle.ic2}>
                  <FontAwesome
                    name="inr"
                    size={16}
                    color="black"
                    style={marketStyle.inr}
                  />
                  <Text style={marketStyle.price}>22</Text>
                  <FontAwesome
                    name="cart-plus"
                    size={27}
                    color="darkgreen"
                    style={marketStyle.smileyIcon}
                  />
                </View>
              </View>
            </View>
          <View style={marketStyle.subitem}>
            <View style={marketStyle.aitem}>
              <View style={marketStyle.txt}>
                <Text style={marketStyle.title}>Posted by</Text>
                <Text style={marketStyle.username}>Adnan</Text>
              </View>
              <View style={marketStyle.ic}>
                <FontAwesome
                  name="clock-o"
                  size={22}
                  color="#698894"
                  style={marketStyle.smileyIcon}
                />
                <Text style={marketStyle.time}>5d</Text>
                <FontAwesome
                  name="heart"
                  size={22}
                  color="red"
                  style={marketStyle.smileyIcon}
                />
              </View>
            </View>
            <View style={marketStyle.bitem}>
              <Image
                source={require("./assets/salad.png")}
                resizeMode="contain"
                style={marketStyle.imgs}
              />
            </View>
            <View style={marketStyle.citem}>
              <View style={marketStyle.txt2}>
                <Text style={marketStyle.tit}>Mixed</Text>
                <Text style={marketStyle.nme}>Fruit Salad</Text>
              </View>
              <View style={marketStyle.ic2}>
                <FontAwesome
                  name="inr"
                  size={16}
                  color="black"
                  style={marketStyle.inr}
                />
                <Text style={marketStyle.price}>46</Text>
                <FontAwesome
                  name="cart-plus"
                  size={27}
                  color="darkgreen"
                  style={marketStyle.smileyIcon}
                />
              </View>
            </View>      
          </View>
        </View>
      </ScrollView>
      <View style={marketStyle.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Market")}>
          <View style={marketStyle.bottomSquare}>
            <FontAwesome
              name="home"
              size={28}
              color="#698894"
              style={marketStyle.smileyIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Liked")}>
          <View style={marketStyle.bottomSquare}>
            <FontAwesome
              name="heart"
              size={28}
              color="#128C7E"
              style={marketStyle.smileyIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <View style={marketStyle.bottomSquare}>
            <FontAwesome
              name="cart-plus"
              size={28}
              color="#698894"
              style={marketStyle.smileyIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
          <View style={marketStyle.bottomSquare}>
            <FontAwesome
              name="cube"
              size={28}
              color="#698894"
              style={marketStyle.smileyIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <View style={marketStyle.bottomSquare}>
            <FontAwesome
              name="shopping-bag"
              size={28}
              color="#698894"
              style={marketStyle.smileyIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default Liked;
