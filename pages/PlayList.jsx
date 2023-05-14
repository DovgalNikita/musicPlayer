import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TextInput, Button, Image } from 'react-native';
import SearchBar from '../components/SearchBar';
import FlatIconCurMusicComp from '../components/FlatIconCurMusicComp';
import {MusicListContext} from '../App';
import CurMusicScreen from '../components/CurMusicScreen';
import ListMusicComp from '../components/ListMusicComp';

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

})


export const PlayList = () => {

    const {curSound,isCurMusicScreen,selectedMusic, setSelectedMusic, setCurSound} = React.useContext(MusicListContext);
    const [filtredListMusic,setFiltredListMusic] = React.useState(selectedMusic);

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
                <SearchBar ListMusic={selectedMusic} filtredListMusic={filtredListMusic} setFiltredListMusic={setFiltredListMusic}/>
                <ListMusicComp ListMusic={selectedMusic} selectedMusic={selectedMusic} setSelectedMusic={setSelectedMusic} setCurSound={setCurSound}/>
            </View>
        </SafeAreaView>
    )
}