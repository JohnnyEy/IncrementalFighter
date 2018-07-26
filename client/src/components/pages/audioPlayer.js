import React from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';
//...
ReactDOM.render(
    <ReactAudioPlayer
        src="/../../music/Chiptune_Nobility.mp3"
        autoplay
    />,
    document.querySelector('.app')

);
export default ReactAudioPlayer;