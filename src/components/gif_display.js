import React from 'react';

const GifDisplay = ({ gifID }) => {
    // if no video is ready
    if (!gifID) {
        return <div className='gif-display'>DISPLAY GIF HERE</div>
    }

    const url = 'https://i.giphy.com/media/'+gifID+'/giphy.webp'
    console.log("url", url)

    return(
        <div className='gif-display'>
            <img src={url}/>
        </div>
    );
};

export default GifDisplay;