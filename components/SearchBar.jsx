import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import { StyleSheet, View, TextInput  } from 'react-native';

const styles = StyleSheet.create({
    searchMusicBar:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:"100%",
        height:"auto",
    },
    searchMusic:{
        width:300,
        height:40,
        backgroundColor:"#0f0f0f",
        borderRadius:20,
        color:'white',
        paddingLeft:15,
        paddingRight:15,
        fontWeight:'700'
    },
})

const SearchBar = ({ListMusic, filtredListMusic, setFiltredListMusic}) => {

    return(
        <View style={styles.searchMusicBar}>
            <FontAwesome name="search" size={25} color="grey" />
            <TextInput style={styles.searchMusic} placeholder='Введите исполнителя, название песни' placeholderTextColor='grey' onChangeText={(text)=>{
                setFiltredListMusic(ListMusic)
                text!=''
                ?(setFiltredListMusic(filtredListMusic.filter(item=>item.nameSound.toLowerCase().includes(text.toLowerCase())))||setFiltredListMusic(filtredListMusic.filter(item=>item.author.toLowerCase().includes(text.toLowerCase()))))
                :setFiltredListMusic(ListMusic);
            }}></TextInput>
        </View>
    )
}

export default SearchBar;