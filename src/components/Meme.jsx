import React from 'react';
import memeData from '../memesData.js'

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randImg: "https://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImgs, setAllMemeImgs] = React.useState(memeData);    

    function getMeme() {
        const memeArray = allMemeImgs.data.memes;
        const randNum = Math.floor(Math.random() * memeArray.length);
        const n_url = memeArray[randNum].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randImg: n_url
        }));
    }

    return (
        <main>
            <div className='form'>
                <input type="text" className='form-input' placeholder='Top text' />
                <input type="text" className='form-input' placeholder='Bottom text' />
                <button onClick={getMeme} className='form-btn'>Get a new meme image 🖼</button>
            </div>
            <img className='meme-img' src={meme.randImg} alt="meme-img"></img>
        </main>
    );
}
