import React from 'react';

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randImg: "https://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImgs, setAllMemeImgs] = React.useState([]);
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setAllMemeImgs(data.data.memes))       
    }, [])

    function getMeme() {
        const randNum = Math.floor(Math.random() * allMemeImgs.length);
        const n_url = allMemeImgs[randNum].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randImg: n_url
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <main>
            <div className='form'>
                <input type="text" className='form-input' placeholder='Top text' 
                name="topText"
                onChange={handleChange}
                value={meme.topText}/>

                <input type="text" className='form-input' placeholder='Bottom text' 
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText}/>

                <button onClick={getMeme} className='form-btn'>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img className='meme-img' src={meme.randImg} alt="meme-img"></img>

                <h2 className="meme-text top">{meme.topText}</h2>

                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    );
}
