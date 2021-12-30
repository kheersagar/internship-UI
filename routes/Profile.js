import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto, MaterialIcons, Entypo } from "@expo/vector-icons";
import List from "../components/list/List";
import { StatusBar } from "expo-status-bar";

export default function Profile() {
  const data = [
    {
      id: 1,
      value: "1",
    },
    {
      id: 2,
      value: "1",
    },
    {
      id: 3,
      value: "1",
    },
    {
      id: 4,
      value: "1",
    },
    {
      id: 5,
      value: "1",
    },
  ];
  const [colorButtonRanking, setColorButtonRanking] = useState({
    button: "#2380e2",
    backgroundColor: "white",
  });
  const [colorButtonActivity, setColorButtonActivity] = useState({
    button: "gray",
    backgroundColor: "#eaeef4",
  });
  // #2380e2
  function HandleClick(val) {
    if (val == 0) {
      setColorButtonRanking({
        button: "#2380e2",
        backgroundColor: "white",
      });
      setColorButtonActivity({
        button: "gray",
        backgroundColor: "#eaeef4",
      });
    } else {
      setColorButtonActivity({
        button: "#2380e2",
        backgroundColor: "white",
      });
      setColorButtonRanking({
        button: "gray",
        backgroundColor: "#eaeef4",
      });
    }
  }
  return (
    <SafeAreaView
      style={{ flex: 1, padding: 10, backgroundColor: "rgba(247,248,250,255)" }}
    >
      <StatusBar backgroundColor="white" barStyle="light-content"/>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.first_section}>
          <View style={styles.head}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </View>
          <View style={styles.head}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
              Place Bid
            </Text>
          </View>
          <View style={styles.search}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </View>
        </View>
        <View style={styles.second_section}>
          <View style={{justifyContent:'center',alignItems:'center',height:220}}>
            <Image
              source={{
                uri: "https://images.livemint.com/img/2021/05/27/1600x900/Bitcoin_1622133052399_1622133063141.jpg",
              }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 25,
              }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.container}>
              <View>
                <Image
                  source={{
                    uri: "https://images.livemint.com/img/2021/05/27/1600x900/Bitcoin_1622133052399_1622133063141.jpg",
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  paddingHorizontal: 20,
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Cubex project
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "400", color: "gray" }}
                >
                  12.200 items
                </Text>
              </View>
            </View>
          </View>
          {/*  */}
          <View style={{marginBottom:20}}>
            <View style={styles.category}>
              <View style={{ flex: 3 }}>
                <Text
                  style={{ color: "black", fontSize: 18, fontWeight: "700" }}
                >
                  Shuffle Runner #100
                </Text>
              </View>
              <View
                style={{ flex: 1, alignItems: "center", alignItems: "center" }}
              >
                <View style={styles.head_left}>
                  <TouchableOpacity style={styles.head_value}>
                    <Text style={{ fontSize: 14, fontWeight: "700" }}>
                      <Entypo name="select-arrows" size={18} color="black" />
                      802.50{" "}
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "300",
                          color: "gray",
                        }}
                      >
                        ETH
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Text style={{ fontSize: 18, color: "gray" }}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to  
            </Text>
          </View>
          {/*  */}
          <View style={styles.category}>
            <View style={{ flex: 3 }}>
              <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
                Current Bid
              </Text>
            </View>
            <View
              style={{ flex: 1, alignItems: "center", alignItems: "center" }}
            >
              <Text
                style={{
                  color: "rgba(71,131,187,255)",
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                See All
              </Text>
            </View>
          </View>
          {/*  */}
          <View
            style={[
              styles.container,
              {
                backgroundColor: "rgba(247,248,250,255)",
                borderRadius: 25,
                padding: 10,
              },
            ]}
          >
            <View>
              <Image
                source={{
                  uri: "https://images.livemint.com/img/2021/05/27/1600x900/Bitcoin_1622133052399_1622133063141.jpg",
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
            </View>
            <View
              style={{
                flex: 2,
                paddingHorizontal: 20,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700" }}>
                Cubex project
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "400", color: "gray" }}>
                12.200 items
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                alignItems: "flex-start",
              }}
            >
              <View style={[styles.head_left]}>
                <TouchableOpacity
                  style={[
                    styles.head_value,
                    { height: 40, paddingHorizontal: 5 },
                  ]}
                >
                  <Text style={{ fontSize: 14, fontWeight: "700" }}>
                    802.50{" "}
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "300",
                        color: "gray",
                      }}
                    >
                      ETH
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
        <View>
          <TouchableOpacity style={styles.activity}>
            <Text style={{color:'blue',fontWeight:'700',fontSize:18}}>Activity</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.bid}>
            <Text style={{color:'white',fontWeight:'700',fontSize:18}}>Place Bid</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  first_section: {
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor:'red',
    marginBottom: 20,
  },
  second_section: {
    // flex:1,
    justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: "white",
  },
  head: {
    flex: 3,
    justifyContent: "center",
  },
  search: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  category: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 20,
  },
  head_left: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    // backgroundColor:'red',
    // marginLeft:10,
  },
  head_value: {
    backgroundColor: "white",
    width: 150,
    // height: 50,
    justifyContent: "center",
    // padding: 10,
    // paddingLeft:20,
    borderRadius: 25,
  },
  activity:{
    width:150,
    backgroundColor:'white',
    padding:20,
    color:'blue',
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center'
  },
  bid:{
    width:150,
    color:'white',
    backgroundColor:'blue',
    padding:20,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center'
  }
});
