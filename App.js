import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  TextInput,
  ImageBackground
} from "react-native";

import { images, icons, COLORS, SIZES } from "./constants";
import styles from "./theme/style";

const Home = ({ navigation }) => {
  const products = [
    {
      productId: 1,
      productName: "Item Name",
      productDesc :"Description",
      price: 10.0000,
      image: images.greenChair
    },
    {
      productId: 2,
      productName: "Item Name",
      productDesc :"Description",
      price: 10.0000,
      image: images.redChair
    },
    {
      productId: 3,
      productName: "Item Name",
      productDesc :"Description",
      price: 10.0000,
      image: images.whiteChair
    }
  ];
  // Render
  const renderItems = () => {
    return (
      <View style={{marginTop:10}}>
        <Text
          style={styles.h1}
        >
          Explore
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({ item }) =>
            <TouchableOpacity style={{ marginLeft: SIZES.padding }}>
              <View style={[styles.itemBox, styles.shadow]}>
                <ImageBackground
                  source={item.image}
                  resizeMode="contain"
                  imageStyle={{ borderRadius: SIZES.radius * 2 }}
                  style={styles.boxImage}
                >
                  <TouchableOpacity
                    style={{ flexDirection: "row-reverse", margin: 10 }}
                  >
                    <Image
                      source={icons.favourite}
                      resizeMode="contain"
                      style={{
                        width: 28,
                        height: 28
                      }}
                    />
                  </TouchableOpacity>
                </ImageBackground>

                <View style={{ marginTop: 20, width: "100%" }}>
                  <Text
                    style={{ color: COLORS.black, fontWeight: "bold", fontSize: 15 }}
                  >
                   {item.productName}
                  </Text>
                  <Text style={{ marginTop: SIZES.base, color:  COLORS.black }}>
                  {item.productDesc}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: COLORS.grey, fontWeight: "bold" }}>
                    $ {item.price.toFixed(2)}
                  </Text>
                  <View style={{}}>
                    <Image
                      source={icons.plus}
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30
                      }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>}
        />
      </View>
    );
  };

  function renderHeader() {
    return (
      <View style={{ paddingHorizontal: SIZES.padding, marginVertical: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <TouchableOpacity>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity>
              <Image
                source={icons.contact}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function renderSearchSection(title) {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={[styles.shadow, styles.searchInput]}>
          <View>
            <Image
              source={icons.search}
              style={{ width: 20, height: 20, marginHorizontal: 10 }}
            />
          </View>
          <TextInput
            style={styles.searchInputText}
            placeholder="Search"
            placeholderTextColor={COLORS.grey}
          />
        </View>

        <View
          style={{
            width: "20%",
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity>
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "red"
            }}
          />
        </View>
      </View>
    );
  }

  function renderBestSelling() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.h1}>Best Selling</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%" }}
          data={products}
          renderItem={({ item }) =>
            <View style={[styles.shadow, styles.bestSellingItem]}>
              <Image
                source={images.greenChair}
                resizeMode="cover"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 10
                }}
              />

              <View
                style={{
                  marginLeft: SIZES.radius,
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{ color:  COLORS.black, fontFamily: "Bold", fontSize: 20 }}
                >
                  Minimal Chair
                </Text>
                <Text style={{ color: COLORS.grey }}>Lorem Ipusm</Text>
                <Text style={{ color:  COLORS.black }}>494 $</Text>
              </View>

              {/* Button */}
              <View
                style={{
                  marginRight: SIZES.radius,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <TouchableOpacity
                  style={styles.bestSellingItemBtn}
                >
                  <Image
                    source={icons.chevron}
                    resizeMode="contain"
                    style={{
                      height: 20,
                      width: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F5F6FA" barStyle="light-content" />
      {renderHeader()}
      {renderSearchSection()}
      {renderItems()}
      {renderBestSelling()}
    </SafeAreaView>
  );
};


export default Home;
