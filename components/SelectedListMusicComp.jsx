import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import {ScrollView, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import {MusicListContext} from '../App';

const SelectedListMusicComp = () => {

    const { selectedMusic, setSelectedMusic, setCurSound} = React.useContext(MusicListContext);

    return(
        <ScrollView style={styles.listMusic}>
            {
                selectedMusic.map((item,index)=>
                    <TouchableOpacity key={item.id} onPress={()=>setCurSound(item)}>
                        <View style={styles.musicInstance}>
                            <Text style={styles.numMusicInstance}>{index+1}</Text>
                            <Image style={styles.imgMusicInstance} source={item.img}></Image>
                            <View style={styles.infoMusicInstance}>
                                <Text style={styles.nameMusicInstance}>{item.nameSound}</Text>
                                <Text style={styles.authorMusicInstance}>{item.author}</Text>
                            </View>
                            {item.liked
                                ? <TouchableOpacity>
                                    <AntDesign name="heart" size={24} color="#b80000" style={{marginRight:25}} onPress={()=>{
                                            item.liked=false; 
                                            setSelectedMusic(selectedMusic.filter(instance=>instance.id!==item.id));
                                        }}/>
                                    </TouchableOpacity>

                                : <TouchableOpacity>
                                    <AntDesign name="heart" size={24} color="#080808" style={{marginRight:25}} onPress={()=>{item.liked=true; setSelectedMusic([...selectedMusic,item])}}/>
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
        marginTop:30,
        width:'100%',
        height:400,
        // backgroundColor:'red'
    },
    musicInstance:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:'100%',
        height:60,
        // borderTopWidth:1,
        // borderBottomWidth:1,
        // borderColor:'#0f0f0f'
    },
    numMusicInstance:{
        width:15,
        fontSize:20,
        color:'#ededed',

    },
    imgMusicInstance:{
        width:50,
        height:50
    },
    infoMusicInstance:{
        width:150,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    nameMusicInstance:{
        color:'#ededed',
        
    },
    authorMusicInstance:{
        color:'#7d7d7d',
        
    }
}


export default SelectedListMusicComp;