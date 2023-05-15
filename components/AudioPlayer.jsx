import React from 'react';
import TrackPlayer from 'react-native-track-player';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ListMusic } from '../data/listMusic';

TrackPlayer.updateOptions({
    stopWithApp: false, 
    capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE]
});

const setUpTrackPlayer = async () => {
    try{
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(ListMusic);
    }catch(e){

    }
}

const AudioPlayer = () => {

    React.useEffect(() => {
        TrackPlayer.updateOptions({
          stopWithApp: false,
          capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
          compactCapabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
          ],
        });
        setUpTrackPlayer();
        return () => TrackPlayer.destroy();
      }, []);

    return(
        <View style={styles.button}>
            <TouchableOpacity style={styles.button} onPress={()=>TrackPlayer.play()}>
                <Text>Включить</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        width:150,
        height:50,
        backgroundColor:'red'
    }
})

export default AudioPlayer;