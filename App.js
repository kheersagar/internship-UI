import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './routes/HomeScreen';
import Stats from './routes/Stats';
import Profile from './routes/Profile';
import More from './routes/More';
// icons
import { AntDesign,Ionicons,FontAwesome5,Octicons } from '@expo/vector-icons';

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
    <Tab.Navigator shifting={false}
    activeColor='#2380e2'
    barStyle={{
      backgroundColor:'white',
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({focused , color, size }) =>{
        const c = focused ? '#2380e2' : 'gray'
        return(
        <AntDesign name="home" size={24} color={c} />

        ) 
      },
    }} />
      <Tab.Screen name="Stats" component={Stats} options={{
      tabBarLabel: 'Stats',
      tabBarIcon: ({focused , color, size }) =>{
        const c = focused ? '#2380e2' : 'gray'
        return(
        <FontAwesome5 name="chart-line" size={24} color={c}/>

        ) 
      },
    }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({focused , color, size }) =>{
        const c = focused ? '#2380e2' : 'gray'
        return(
        <Ionicons name="person" size={24} color={c}/>

        ) 
      },
    }} />
      <Tab.Screen name="More" component={More} options={{
      tabBarLabel: 'More',
      tabBarIcon: ({focused , color, size }) =>{
        const c = focused ? '#2380e2' : 'gray'
        return(
        <Octicons name="three-bars" size={24} color={c}/>

        ) 
      },
    }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
