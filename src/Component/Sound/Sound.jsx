import React, {useEffect, useState} from 'react'
// import useSound from 'use-sound';
// import {sound as forSound} from '../../assets'

const Sound = () => {
    const [audio, SetAudio] = useState("");
    
    const Playit = () => {
        audio.play();
    };
    const Stopit = () => {
        
        audio.pause();
    };
    useEffect(() => {
        SetAudio(new Audio('https://cdn.pixabay.com/download/audio/2022/10/23/audio_b3ca30d553.mp3?filename=horse-123780.mp3'));
  }, []);
//   return (
//     <div>Sound</div>
//   )
}

export default Sound