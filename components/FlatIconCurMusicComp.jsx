import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {MusicListContext} from '../App';


const styles = StyleSheet.create({
    flatIconCurMusic:{
        position:'absolute',
        top:100,
        width:100,
        height:65,
        backgroundColor:'#0f0f0f',
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        zIndex:1
    },
    soundflatIconCont:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:0,
        height:'100%',
        width:"60%",
        backgroundColor:'#0a0a0a',
    },
    basketflatIconCont:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:0,
        height:'100%',
        width:"40%",
        backgroundColor:'#000000',
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
    },
    img:{
        width:'70%',
        height:'70%'
    }
})

const FlatIconCurMusicComp = () => {

    const {curSound, setCurSound, setIsCurMusicScreen, setIsPlaying,isPlaying } = React.useContext(MusicListContext);

    return(
        <View style={styles.flatIconCurMusic}>
                <View style={styles.soundflatIconCont}><TouchableOpacity style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} onPress={()=>{
                    setIsCurMusicScreen(true);
                }}><Image style={styles.img} source={curSound.img}></Image></TouchableOpacity></View>
                <View style={styles.basketflatIconCont}>
                    <TouchableOpacity onPress={()=>{
                    setIsPlaying(false);
                    setCurSound(null);
                }}>
                    <Ionicons name="trash" size={25} color="#b80000" />
                </TouchableOpacity></View>
        </View>
    )
}

export default FlatIconCurMusicComp;