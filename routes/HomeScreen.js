import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Entypo,EvilIcons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import Card from "../components/card/Card";

export default function HomeScreen() {
  const category = ["Trending", "Arts", "Music", "Science", "Latest"];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "rgba(247,248,250,255)",
        paddingHorizontal: 10,
      }}
    >
      <StatusBar backgroundColor="white" barStyle="light-content"/>
      <View style={styles.first_section}>
        <View style={styles.head_left}>
          <TouchableOpacity style={styles.head_value}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              <Entypo name="select-arrows" size={24} color="black" />
              802.50{" "}
              <Text style={{ fontSize: 18, fontWeight: "300", color: "gray" }}>
                ETH
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.head_right}>
          <TouchableOpacity style={styles.head_noti}>
            <FontAwesome name="bell" size={24} color="#95a0b7" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.second_section}>
        <Searchbar
          placeholder="Search items, collection ..."
          style={styles.search}
        />
      </View>
      <View style={styles.third_section}>
        <View style={styles.category}>
          <View style={{ flex: 3 }}>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "700" }}>
              Category
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: "rgba(71,131,187,255)", fontSize: 16, fontWeight: "700" }}>
              See All
            </Text>
          </View>
        </View>
        <View style={styles.category}>
          <FlatList 
            data={category}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item})=>{
              return <TouchableOpacity style={styles.category_item}><Text style={styles.category_item_text}>{item}</Text></TouchableOpacity>
            }}
          />
        </View>
      </View>
      <View style={styles.fourth_section}>
      <View style={styles.category}>
          <View style={{ flex: 3 }}>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "700" }}>
              Trending Collectibles
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: "rgba(71,131,187,255)", fontSize: 16, fontWeight: "700" }}>
              See All
            </Text>
          </View>
        </View>
        <View style={{marginBottom:20}}>
          <FlatList 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
            data={category}
            renderItem={()=>{
              return <Card />
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  first_section: {
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 15,
  },
  second_section: {
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal:10,
    marginBottom: 20,
  },
  third_section: {
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:20,
  },
  fourth_section: {
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:20
  },
  head_left: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start",
    // backgroundColor:'red',
    // marginLeft:10,
  },
  head_right: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    // paddingRight:20,
  },
  head_value: {
    backgroundColor: "white",
    width: 150,
    height: 50,
    justifyContent: "center",
    padding: 10,
    // paddingLeft:20,
    borderRadius: 25,
  },
  head_noti: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  search: {
    borderRadius: 20,
  },
  category: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  category_item:{
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:50,
    backgroundColor:'white',
    borderRadius:20,
    paddingHorizontal:10,
    marginRight:10,
    marginTop:10,
  },
  category_item_text:{
    fontSize:16,
    color:'gray',
    fontWeight:'700',
  }
});
