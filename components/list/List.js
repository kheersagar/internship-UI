import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function List() {
  return (
    <View style={styles.container}>
        <View>
          <Image 
            source={{uri:"https://images.livemint.com/img/2021/05/27/1600x900/Bitcoin_1622133052399_1622133063141.jpg"}}
            style={{
              width:50,
              height:50,
              borderRadius:25
            }}
          />
        </View>
        <View style={{flex:2,paddingHorizontal:20,justifyContent:'center'}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>Cubex project</Text>
          <Text style={{fontSize:14,fontWeight:'400',color:'gray'}} >12.200 items</Text>
        </View>
        <View>
          <Text style={{fontSize:18,fontWeight:'700'}}>920000</Text>
          <Text style={{fontSize:14,fontWeight:'400',color:'gray'}}>Total ETH</Text>
        </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:10
  }
})
