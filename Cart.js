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

const Cart = ({ navigation }) => {
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
          <Text style={marketStyle.group}>My Cart</Text>
        </View>
      <ScrollView style={marketStyle.main}>
       <View style={marketStyle.card}>
       <View style={marketStyle.carda}>
       <Image
                  source={require("./assets/tomato.png")}
                  resizeMode="contain"
                  style={marketStyle.imgcart}
                />
       </View>
       <View style={marketStyle.cardb}>
       <Text style={marketStyle.namecart}>Tomato</Text>
       <Text style={marketStyle.quant}>1kg</Text>
       <Text style={marketStyle.typecart}>Vegetable</Text>

       </View>
       <View style={marketStyle.cardc}>
       <FontAwesome
              name="minus-square-o"
              size={23}
              color="black"
              style={marketStyle.mar}
            />
       <Text style={marketStyle.qua}>  1kg  </Text>
        <FontAwesome
            name="plus-square-o"
            size={23}
            color="black"
            style={marketStyle.mar}
          />
       </View>
       <View style={marketStyle.cardd}>
       <FontAwesome
              name="inr"
              size={20}
              color="darkgreen"
              style={marketStyle.mar}
            />
       <Text style={marketStyle.rupee}> 90</Text>
       </View>

       </View>
       <View style={marketStyle.card}>
       <View style={marketStyle.carda}>
       <Image
                  source={require("./assets/cauli.png")}
                  resizeMode="contain"
                  style={marketStyle.imgcart}
                />
       </View>
       <View style={marketStyle.cardb}>
       <Text style={marketStyle.namecart}>Cauliflower</Text>
       <Text style={marketStyle.quant}>1 unit</Text>
       <Text style={marketStyle.typecart}>Vegetable</Text>

       </View>
       <View style={marketStyle.cardc}>
       <FontAwesome
              name="minus-square-o"
              size={23}
              color="black"
              style={marketStyle.mar}
            />
       <Text style={marketStyle.qua}>  1   </Text>
        <FontAwesome
            name="plus-square-o"
            size={23}
            color="black"
            style={marketStyle.mar}
          />
       </View>
       <View style={marketStyle.cardd}>
       <FontAwesome
              name="inr"
              size={20}
              color="darkgreen"
              style={marketStyle.mar}
            />
       <Text style={marketStyle.rupee}> 22</Text>
       </View>

       </View><View style={marketStyle.card}>
       <View style={marketStyle.carda}>
       <Image
                  source={require("./assets/salad.png")}
                  resizeMode="contain"
                  style={marketStyle.imgcart}
                />
       </View>
       <View style={marketStyle.cardb}>
       <Text style={marketStyle.namecart}>Fruit Salad</Text>
       <Text style={marketStyle.quant}>400 gm</Text>
       <Text style={marketStyle.typecart}>Mixed</Text>

       </View>
       <View style={marketStyle.cardc}>
       <FontAwesome
              name="minus-square-o"
              size={23}
              color="black"
              style={marketStyle.mar}
            />
       <Text style={marketStyle.qua}>  1  </Text>
        <FontAwesome
            name="plus-square-o"
            size={23}
            color="black"
            style={marketStyle.mar}
          />
       </View>
       <View style={marketStyle.cardd}>
       <FontAwesome
              name="inr"
              size={20}
              color="darkgreen"
              style={marketStyle.mar}
            />
       <Text style={marketStyle.rupee}> 46</Text>
       </View>

       </View>
       
       <View style={marketStyle.cardpay}>
        <View style={marketStyle.aa}>
        <Text style={marketStyle.namecart}>Total:                                                             </Text>
        <FontAwesome
              name="inr"
              size={17}
              color="black"
              style={marketStyle.mar}
            />
        <Text style={marketStyle.namecart}> 156</Text>

        </View>
        <View style={marketStyle.ab}>
        <Text style={marketStyle.typecart}>Whitefield, Bangalore                  </Text>
        <FontAwesome
            name="map-marker"
            size={20}
            color="green"
            style={marketStyle.smileyIcon}
          />
        <Text style={marketStyle.txtt}> Change address</Text>

        </View>
        <View style={marketStyle.ac}>
        <View style={marketStyle.adding}>
                <Text style={marketStyle.post}>Redirect to WhatsApp Pay     </Text>
                <FontAwesome
              name="whatsapp"
              size={20}
              color="white"
              style={marketStyle.smileyIcon}
            />
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
              color="#128C7E"
              style={marketStyle.smileyIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default Cart;
