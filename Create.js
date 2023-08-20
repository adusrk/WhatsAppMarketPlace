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

const Create = ({ navigation }) => {
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
        <ScrollView>
          <View style={marketStyle.fourthcol}>
            <Text style={marketStyle.group}>Add a new product</Text>
          </View>
          <View style={marketStyle.addnew}>
            <View style={marketStyle.inputform}>
              <FontAwesome
                name="cube"
                size={20}
                color="#698894"
                paddingHorizontal={8}
              />
              <TextInput placeholder="| Enter category of the product " />
            </View>
            <View style={marketStyle.inputform}>
            <FontAwesome
                name="id-card"
                size={20}
                color="#698894"
                paddingHorizontal={8}
              />
              <TextInput placeholder="| Enter the name of product " />
            </View>
            <View style={marketStyle.inputform}>
            <FontAwesome
                name="clock-o"
                size={20}
                color="#698894"
                paddingHorizontal={8}
              />
              <TextInput placeholder="| Enter the number of days product will be on sale " />
            </View>
           
            <View style={marketStyle.inputform}>
            <FontAwesome
                name="inr"
                size={20}
                color="#698894"
                paddingHorizontal={8}
              />
              <TextInput placeholder="| Enter price of the product " />
            </View>
            <View style={marketStyle.addpic}>
              <FontAwesome
                name="file-image-o"
                size={90}
                color="#698894"
                style={marketStyle.smileyIcon}
              />
              <View style={marketStyle.piccc}>
                <FontAwesome
                  name="plus-circle"
                  size={20}
                  color="#698894"
                  style={marketStyle.smileyIcon}
                />
                <Text>Add image</Text>
              </View>
            </View>

            <View style={marketStyle.adding}>
                <Text style={marketStyle.post}>Post your product</Text>
            </View>
          </View>
          <View style={marketStyle.fourthcol}>
            <Text style={marketStyle.group}>My Products</Text>
          </View>
          <View style={marketStyle.main}>
            <View style={marketStyle.item}>
              <View style={marketStyle.subitem}>
                <View style={marketStyle.aitem}>
                  <View style={marketStyle.txt}>
                    <Text style={marketStyle.title}>Posted on</Text>
                    <Text style={marketStyle.username}>17 Aug</Text>
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
                      name="trash"
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
                      name="pencil"
                      size={24}
                      color="darkblue"
                      style={marketStyle.smileyIcon}
                    />
                  </View>
                </View>
              </View>
              <View style={marketStyle.subitem}>
                <View style={marketStyle.aitem}>
                  <View style={marketStyle.txt}>
                    <Text style={marketStyle.title}>Posted on</Text>
                    <Text style={marketStyle.username}>14 Aug</Text>
                  </View>
                  <View style={marketStyle.ic}>
                    <FontAwesome
                      name="clock-o"
                      size={22}
                      color="#698894"
                      style={marketStyle.smileyIcon}
                    />
                    <Text style={marketStyle.time}>1d</Text>
                    <FontAwesome
                      name="trash"
                      size={22}
                      color="red"
                      style={marketStyle.smileyIcon}
                    />
                  </View>
                </View>
                <View style={marketStyle.bitem}>
                  <Image
                    source={require("./assets/fsalad.png")}
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
                    <Text style={marketStyle.price}>50</Text>
                    <FontAwesome
                      name="pencil"
                      size={24}
                      color="darkblue"
                      style={marketStyle.smileyIcon}
                    />
                  </View>
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
                color="#698894"
                style={marketStyle.smileyIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Create")}>
            <View style={marketStyle.bottomSquare}>
              <FontAwesome
                name="cart-plus"
                size={28}
                color="#128C7E"
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

export default Create;
