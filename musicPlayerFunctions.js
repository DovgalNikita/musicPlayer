import * as React from 'react';
import { Audio } from 'expo-av';

const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const SampleTrack = require('./source/sounds/insta.mp3');
function musicFunc(){
  
  const sound = React.useRef(new Audio.Sound());

  React.useEffect(() => {
    LoadAudio();
}, []);
}

export const PlayAudio = async () => {
  try {
    const result = await sound.current.getStatusAsync();
    if (result.isLoaded) {
      if (result.isPlaying === false) {
        sound.current.playAsync();
      }
    }
  } catch (error) {}
};

export const PauseAudio = async () => {
  try {
    const result = await sound.current.getStatusAsync();
    if (result.isLoaded) {
      if (result.isPlaying === true) {
        sound.current.pauseAsync();
      }
    }
  } catch (error) {}
};

export const LoadAudio = async () => {
  SetLoading(true);
  const checkLoading = await sound.current.getStatusAsync();
  if (checkLoading.isLoaded === false) {
    try {
      const result = await sound.current.loadAsync(SampleTrack, {}, true);
      if (result.isLoaded === false) {
        SetLoading(false);
        console.log('Error in Loading Audio');
      } else {
        SetLoading(false);
        SetLoaded(true);
      }
    } catch (error) {
      console.log(error);
      SetLoading(false);
    }
  } else {
    SetLoading(false);
  }
}
  