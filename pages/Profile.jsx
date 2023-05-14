import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TextInput, Button, Image } from 'react-native';
import {MusicListContext} from '../App';

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


export const Profile = () => {
    const {musicList} = React.useContext(MusicListContext);


    return(
        <SafeAreaView style={styles.screen}>
            <View style={styles.content}>
                <ScrollView>
                    
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}