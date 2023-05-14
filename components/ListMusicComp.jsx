import React, { useEffect } from 'react';
import {AntDesign} from '@expo/vector-icons';
import {ScrollView, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Audio } from 'expo-av';
import {MusicListContext} from '../App';


const ListMusicComp = ({ListMusic, selectedMusic, setSelectedMusic, setCurSound}) => {
    
    const {curTrackPlayed, setCurTrackPlayed, isPlaying, setIsPlaying} = React.useContext(MusicListContext);

    const sound = React.useRef(new Audio.Sound());

    useEffect(()=>{
        if(isPlaying){
            UnloadAudio(); 
            LoadAudio();
        }else{

        }
    },[curTrackPlayed,isPlaying])

      const PlayAudio = async () => {
        try {
            sound.current.playAsync();
        } catch (error) {}
      };
    
      const PauseAudio = async () => {
        try {
            sound.current.pauseAsync();
        } catch (error) {}
      };
    
      const LoadAudio = async () => {
        try{
            await sound.current.loadAsync(curTrackPlayed, {}, true);
            await PlayAudio();
        } catch (error) {
            console.log(error);
          }
      };

      const UnloadAudio = async () => {
        sound.current.stopAsync();
        await sound.current.unloadAsync();
      };



    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.listMusic}>
            {
                ListMusic.map((item,index)=>
                    <TouchableOpacity key={item.id} onPress={()=>{
                            setCurSound(item);

                            setCurTrackPlayed(item.url);
                            setIsPlaying(true);
                        }}>
                        <View style={styles.musicInstance} >
                            <Text style={styles.numMusicInstance}>{index+1}</Text>
                            <Image style={styles.imgMusicInstance} source={item.img}></Image>
                            <View style={styles.infoMusicInstance}>
                                <Text style={styles.nameMusicInstance}>{item.nameSound}</Text>
                                <Text style={styles.authorMusicInstance}>{item.author}</Text>
                            </View>
                            {item.liked
                                ? <TouchableOpacity>
                                    <AntDesign style={styles.heart} name="heart" size={24} color="#b80000" onPress={()=>{
                                        item.liked=false; 
                                        setSelectedMusic(selectedMusic.filter(instance=>instance.id!=item.id));
                                    }}/>
                                    </TouchableOpacity>

                                : <TouchableOpacity>
                                    <AntDesign name="heart" size={24} color="#080808" onPress={()=>{item.liked=true; setSelectedMusic([...selectedMusic,item])}}/>
                                  </TouchableOpacity>
                            }
                        </View>
                    </TouchableOpacity>
                )
            } 
        </ScrollView>
    )
}


const styles = {
    listMusic:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:30,
        width:'100%',
        height:"100%",
        minHeight:630
        // backgroundColor:'red'
    },
    musicInstance:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'85%',
        height:60,
        // borderTopWidth:1,
        // borderBottomWidth:1,
        // borderColor:'#0f0f0f'
    },
    numMusicInstance:{
        width:'10%',
        fontSize:20,
        color:'#ededed',

    },
    imgMusicInstance:{
        width:'15%',
        height:50
    },
    infoMusicInstance:{
        width:'60%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    nameMusicInstance:{
        color:'#ededed',
        
    },
    authorMusicInstance:{
        color:'#7d7d7d',
        
    },
    heart:{
        width:'auto',
        marginRight:0,
        marginLeft:0,
        padding:0,
    }
}


export default ListMusicComp;