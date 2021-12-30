import React, { useState } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import List from '../components/list/List';
import { StatusBar } from 'expo-status-bar';

export default function Stats() {
  const data =[
    {
      id:1,
      value:'1',
    },
    {
      id:2,
      value:'1',
    },
    {
      id:3,
      value:'1',
    },
    {
      id:4,
      value:'1',
    },
    {
      id:5,
      value:'1',
    },
  ]
  const [colorButtonRanking,setColorButtonRanking] = useState({
    button:'#2380e2',
    backgroundColor:'white'
  });
  const [colorButtonActivity,setColorButtonActivity] = useState({
    button:'gray',
    backgroundColor:'#eaeef4'
  });
  // #2380e2
  function HandleClick(val){
    if( val == 0){
      setColorButtonRanking({
        button:'#2380e2',
        backgroundColor:'white'
      })
      setColorButtonActivity({
        button:'gray',
        backgroundColor:'#eaeef4'
      })
    }else{
      setColorButtonActivity({
        button:'#2380e2',
        backgroundColor:'white'
      })
      setColorButtonRanking({
        button:'gray',
        backgroundColor:'#eaeef4'
      })
    }
  }
  return (
    <SafeAreaView style={{flex:1,padding:10,backgroundColor: "rgba(247,248,250,255)"}}>
      <StatusBar backgroundColor="white" barStyle="light-content"/>
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.first_section}>
        <View style={styles.head}>
            <Text style={{fontSize:20,fontWeight:'700',color:'black'}}>Statistics</Text>
            <Text style={{fontSize:14,fontWeight:'500',color:'gray'}}>
              The top NFTs on NFTL
            </Text>
        </View>
        <View style={styles.search}>
          <Searchbar style={styles.Searchbar}/>
        </View>
      </View>
      <View style={styles.first_section}>
        <View style={styles.button}>
          <View style={{flex:1}}>
            <TouchableOpacity style={[styles.ranking,{backgroundColor:colorButtonRanking.backgroundColor}]} onPress={()=>HandleClick(0)}>
              <Text style={{color:colorButtonRanking.button}}><Ionicons name="stats-chart" size={24} color={colorButtonRanking.button} /> Ranking</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
          <TouchableOpacity style={[styles.activity,{backgroundColor:colorButtonActivity.backgroundColor}]} onPress={()=>HandleClick(1)}>
              <Text style={{color:colorButtonActivity.button}}><Fontisto name="line-chart" size={20} color={colorButtonActivity.button} /> Activity</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.second_section}>
      <View style={styles.category}>
          <View style={{ flex: 3 }}>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "700" }}>
              Top Verified Collection
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: "rgba(71,131,187,255)", fontSize: 16, fontWeight: "700" }}>
              See All
            </Text>
          </View>
        </View>
        <View style={{backgroundColor:'white',borderRadius:25,flexDirection:'row',padding:20}}> 
        <FlatList 
          data={data}
          keyExtractor={data.id}
          renderItem={({item})=>{
            return(
            <List />
            )
          }}
        />
        </View>
      </View>
      <View style={styles.third_section}>
      <View style={styles.category}>
          <View style={{ flex: 3 }}>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "700" }}>
              Top Collection
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: "rgba(71,131,187,255)", fontSize: 16, fontWeight: "700" }}>
              See All
            </Text>
          </View>
        </View>
        <View style={{backgroundColor:'white',borderRadius:25,flexDirection:'row',padding:20}}> 
        <FlatList 
          data={data}
          keyExtractor={data.id}
          renderItem={({item})=>{
            return(
            <List />
            )
          }}
        />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  first_section:{
    flexDirection:'row',
    justifyContent:'center',
    // backgroundColor:'red',
    marginBottom:20,
  },
  second_section: {
    // flex:1,
    justifyContent: "center",
    alignItems:'flex-start',
    // alignItems: "center",
    // paddingHorizontal:10,
    marginBottom: 20,
  },
  head:{
    flex:3,
    justifyContent:'center'
  },
  search:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end'
  },
  Searchbar:{
    borderRadius:25,
    width:50,
    height:50,
  },
  button:{
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    width: Dimensions.get('screen').width -20,
    height:80,
    borderRadius:25,
    backgroundColor:'rgba(234,238,244,255)',
    padding:10
  },
  ranking:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    height:'100%',
    borderRadius:25,
    marginRight:5
  },
  activity:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    height:'100%',
    borderRadius:25,
    marginLeft:5
  },
  category: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom:20,
  }
})
