import React from 'react';

const GifDisplay = ({ gifID }) => {
    // if no gif ID is given -- starting screen
    if (!gifID) {
        return <div className='gif-display'>DISPLAY GIF HERE</div>
    }

    //build a url with the giphy ID
    const url = 'https://i.giphy.com/media/'+gifID+'/giphy.webp'

    // display the gif
    return(
        <div className='gif-display'>
            <img src={url}/>
        </div>
    );
};

export default GifDisplay;