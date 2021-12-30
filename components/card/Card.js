import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FontAwesome, Entypo,EvilIcons } from "@expo/vector-icons";

export default function Card() {
  return (
    <SafeAreaView style={styles.card}>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Image
          source={{
            uri: "https://images.livemint.com/img/2021/05/27/1600x900/Bitcoin_1622133052399_1622133063141.jpg",
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}
        />
      </View>
      <View style={{flex:0.6, paddingHorizontal: 10,paddingBottom:10, justifyContent: "center" }}>
        <View style={styles.category}>
          <View style={{ flex: 3 }}>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>
              Geometry
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center",alignItems:'center' }}>
            <Text style={{ color: "gray", fontSize: 16, fontWeight: "500" ,alignItems:"center",justifyContent:'center'}}>
              80 <EvilIcons name="heart" size={24} color="black" />
            </Text>
          </View>
        </View>
        {/* 2 */}
          <View style={styles.category}>
          <View style={{ flex: 3 }}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
              Shuffle Runner #100
            </Text>
          </View>
        </View>
        {/* 3 */}
        <View style={styles.category}>
          <View style={{ flex: 2 }}>
            <Text style={{ color: "gray", fontSize: 16, fontWeight: "600" }}>
              Current price
            </Text>
          </View>
          <View style={{ flex: 1.8, alignItems: "center" }}>
            <Text style={{ fontSize: 14, fontWeight: "700" }}>
              <Entypo name="select-arrows" size={24} color="black" />
              802.50{" "}
              <Text style={{ fontSize: 14, fontWeight: "300", color: "gray" }}>
                ETH
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 250,
    height: 400,
    justifyContent: "center",
    marginTop: 20,
    marginRight: 20,
  },
  category: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    // borderWidth:1,
    // height:2,
  },
});
