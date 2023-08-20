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

const Orders = ({ navigation }) => {
  const [imageIndex, setImageIndex] = useState(0); // State to track the currently displayed image index

  const images = [
    require("./assets/1.jpg"),
    require("./assets/2.jpg"),
    require("./assets/3.jpg"),
    require("./assets/4.jpg"),
  ];

  // Function to handle changing the image index
  const handleImageChange = (nextIndex) => {
    setImageIndex(nextIndex);
  };

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
        <View style={marketStyle.thirdcol}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const contentOffset = e.nativeEvent.contentOffset;
              const viewSize = e.nativeEvent.layoutMeasurement;
              const currentIndex = Math.floor(contentOffset.x / viewSize.width);
              setImageIndex(currentIndex);
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                source={image}
                style={marketStyle.slideshowImage}
                resizeMode="cover"
              />
            ))}
          </ScrollView>
          <View style={marketStyle.indicatorContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  marketStyle.imageIndicator,
                  index === imageIndex && marketStyle.activeIndicator,
                ]}
              />
            ))}
          </View>
        </View>

        <View style={marketStyle.fourthcol}>
          <Text style={marketStyle.group}>Shop by category</Text>
        </View>
        <View style={marketStyle.fifthcol}>
          <View style={marketStyle.Square}>
            <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
              <View style={marketStyle.circ}>
                <Image
                  source={require("./assets/grocery.png")}
                  resizeMode="contain"
                  style={marketStyle.imgg}
                />
              </View>
              <Text>Grocery</Text>
            </TouchableOpacity>
          </View>
          <View style={marketStyle.Square}>
            <View style={marketStyle.circ}>
              <Image
                source={require("./assets/stat.png")}
                resizeMode="contain"
                style={marketStyle.imgg}
              />
            </View>
            <Text>Stationary</Text>
          </View>
          <View style={marketStyle.Square}>
            <View style={marketStyle.circ}>
              <Image
                source={require("./assets/electro.png")}
                resizeMode="contain"
                style={marketStyle.imgg}
              />
            </View>
            <Text>Electronics</Text>
          </View>
          <View style={marketStyle.Square}>
            <View style={marketStyle.circ}>
              <Image
                source={require("./assets/cosmetic.png")}
                resizeMode="contain"
                style={marketStyle.imgg}
              />
            </View>
            <Text>Cosmetics</Text>
          </View>
        </View>
        <View style={marketStyle.sixthcol}>
          <Image
            source={require("./assets/5.jpg")}
            style={marketStyle.imgfive}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={marketStyle.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Market")}>
          <View style={marketStyle.bottomSquare}>
            <FontAwesome
              name="home"
              size={28}
              color="#128C7E"
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
              color="#698894"
              style={marketStyle.smileyIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Orders;
