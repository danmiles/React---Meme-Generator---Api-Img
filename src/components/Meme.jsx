import React from 'react';
import { useState, useEffect } from 'react';
// import memesData from '../data/memesData';
import '../styles/Meme.css';
export default function Meme() {
    // useState
    const [allMemes, setAllMemes] = useState([]);

    // Local data file (memesData.jsx)
    // const [allMemeImages, setAllMemeImages] = useState(memesData);

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    });

    // Get Data with Async function + Fetch

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes');
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        // Clear function
        getMemes();
    }, []);

    // Get Data with Fetch promise only
    // useEffect(() => {
    //     fetch('https://api.imgflip.com/get_memes')
    //         .then((res) => res.json())
    //         .then((data) => setAllMemes(data.data.memes));
    // }, []);    

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);

        const url = allMemes[randomNumber].url;

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value,
            };
        });
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
