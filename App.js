import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Home } from './pages/Home';
import { PlayList } from './pages/PlayList';
import { Profile } from './pages/Profile';
import { ListMusic } from './data/listMusic';


export const MusicListContext = React.createContext();
const Tab = createBottomTabNavigator();

export default function App() {

  const [selectedMusic, setSelectedMusic] = React.useState([]);
  const [curSound, setCurSound] = React.useState(null);
  const [isCurMusicScreen, setIsCurMusicScreen] = React.useState(false);

  return (
    <MusicListContext.Provider value={{ListMusic, selectedMusic, setSelectedMusic, curSound, setCurSound, isCurMusicScreen, setIsCurMusicScreen}} >
      <NavigationContainer>
          <Tab.Navigator  
              initialRouteName="Home"
              activeColor="#ededed"
              inactiveColor="#7d7d7d"
              screenOptions={{
              tabBarStyle: { backgroundColor:'#0f0f0f',height:100,borderTopWidth:0,borderRadius:20,position:'absolute'},
              tabBarActiveTintColor: '#c4c4c4',
              tabBarInactiveTintColor: '#757575',
              headerTintColor: '#ededed',
              headerStyle: {
                  backgroundColor: '#0f0f0f',
                  borderTopWidth:0,
                  shadowColor: 'transparent', 
              },
              }}>
              <Tab.Screen name="Home" component={Home} options={{
                  title:'Главная',
                  tabBarLabel: 'Главная',
                  tabBarLabelStyle:{
                  fontSize:10
                  },
                  tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={35} />
                  ),
              }}/>
              <Tab.Screen name="Playlist" component={PlayList} options={{
                  title:'Плейлист',
                  tabBarLabel: 'Плейлист',
                  tabBarLabelStyle:{
                  fontSize:10
                  },
                  tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="playlist-music" color={color} size={40} />
                  ),
              }}/>
              <Tab.Screen name="Profile" component={Profile} options={{
                  title:'Профиль',
                  tabBarLabel: 'Профиль',
                  tabBarLabelStyle:{
                  fontSize:10
                  },
                  tabBarIcon: ({ color}) => (
                  <Ionicons name="person" color={color} size={30} />
                  ),
              }}/>
          </Tab.Navigator>
      </NavigationContainer>
    </MusicListContext.Provider>
  )
}

