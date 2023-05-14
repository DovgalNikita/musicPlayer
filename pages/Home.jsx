import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TextInput, Button, Image, TouchableOpacity  } from 'react-native';
import ListMusicComp from '../components/ListMusicComp';
import FlatIconCurMusicComp from '../components/FlatIconCurMusicComp';
import AlbumsComp from '../components/AlbumsComp';
import MenuLinks from '../components/MenuLinks';
import SearchBar from '../components/SearchBar';
import {MusicListContext} from '../App';
import CurMusicScreen from '../components/CurMusicScreen';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#141414',
        width:WIDTH,
        height:HEIGHT
    },
    content:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        height:"100%",
    },

    divider:{
        justifyContent:'center',
        width:"100%",
        height:2,
        backgroundColor:'#0f0f0f',
        marginTop:20,
        marginBottom:20
    },
})

export const Home = ({}) => {

    const {curSound, isCurMusicScreen, ListMusic, selectedMusic, setSelectedMusic, setCurSound} = React.useContext(MusicListContext);
    const [filtredListMusic,setFiltredListMusic] = React.useState(ListMusic);

    return(
        <SafeAreaView style={styles.screen}>

            {
                curSound
                ?<FlatIconCurMusicComp />
                :null
            }

            {
                isCurMusicScreen
                ?<CurMusicScreen />
                :null
            }   

            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <AlbumsComp />

                    <MenuLinks />

                    <View style={styles.divider}></View>

                    <SearchBar ListMusic={ListMusic} filtredListMusic={filtredListMusic} setFiltredListMusic={setFiltredListMusic} />

                    <ListMusicComp ListMusic={filtredListMusic} selectedMusic={selectedMusic} setSelectedMusic={setSelectedMusic} setCurSound={setCurSound}/>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}