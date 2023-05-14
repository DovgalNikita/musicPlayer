import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions  } from 'react-native';
import { FontAwesome, Ionicons, Foundation, AntDesign } from '@expo/vector-icons';
import React from 'react';
import { MusicListContext } from '../App';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    screen:{
        position:'absolute',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        bottom:0,
        width:WIDTH,
        height:HEIGHT*0.98,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#101010',
        zIndex:10
    },

    swipeButton:{
        flexDirection:'row',
        alignItems:'center',
        height:25,
        width:'50%',
        top:10
    },
    swipeButtonLine:{
        height:2,
        width:'100%',
        backgroundColor:'#ededed',
    },

    img:{
        top:55,
        width:300,
        height:300,
        backgroundColor:'#050505',
        borderRadius:30
    },

    prgressBar:{
        flexDirection:'row',
        alignItems:'center',
        width:300,
        height:20,
        top:100,
    },
    progressLine:{
        justifyContent:'center',
        width:'100%',
        height:2,
        backgroundColor:'#7d7d7d'
    },
    progressButton:{
        position:'absolute',
    },

    caption:{
        position:'absolute',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        top:460,
        width:300,
        height:"auto",
    },
    captionName:{
        color:'#ededed',
        fontWeight:'600'
    },
    captionAuthor:{
        color:'#7d7d7d',
        fontWeight:'600'
    },

    manipulateButtons:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:300,
        height:"auto",
        top:520
    }
})

const CurMusicScreen = () => {

    const {curSound, setCurSound, setIsCurMusicScreen, selectedMusic, setSelectedMusic } = React.useContext(MusicListContext);

    return(
        <View style={styles.screen}>
            <TouchableOpacity style={styles.swipeButton} onPress={()=>setIsCurMusicScreen(false)}><View style={styles.swipeButtonLine}></View></TouchableOpacity>
            <Image style={styles.img} source={curSound.img}></Image>
            <View style={styles.prgressBar}>
                <View style={styles.progressLine}>
                    <Ionicons name="play" size={50} color="#ededed" /><FontAwesome style={styles.progressButton} name="circle" size={20} color="#904010" />
                </View>
            </View>
            <View style={styles.caption}>
                    <Text style={styles.captionName}>{curSound.nameSound}</Text>
                    <Text style={styles.captionAuthor}>{curSound.author}</Text>
            </View>
            <View style={styles.manipulateButtons}>
                <TouchableOpacity><FontAwesome name="download" size={24} color="#7d7d7d" /></TouchableOpacity>
                <TouchableOpacity><Foundation name="previous" size={30} color="#ededed" /></TouchableOpacity>
                <TouchableOpacity><Ionicons name="play" size={55} color="#ededed" /></TouchableOpacity>
                <TouchableOpacity><Foundation name="next" size={30} color="#ededed" /></TouchableOpacity>
                {curSound.liked
                    ? <TouchableOpacity>
                        <AntDesign name="heart" size={24} color="#b80000"  onPress={()=>{
                            curSound.liked=false; 
                            setSelectedMusic(selectedMusic.filter(instance=>instance.id!=curSound.id));
                        }}/>
                        </TouchableOpacity>

                    : <TouchableOpacity>
                        <AntDesign name="heart" size={24} color="#7d7d7d"  onPress={()=>{curSound.liked=true; setSelectedMusic([...selectedMusic,curSound])}}/>
                        </TouchableOpacity>
                }
            </View>     
        </View>
    )
}

export default CurMusicScreen;