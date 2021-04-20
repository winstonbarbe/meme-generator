/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

function MemeGenerator () {
  const [topText, setTopText] = useState("Top Meme Content");
  const [bottomText, setBottomText] = useState("Bottom Meme Content");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemeImgs, setAllMemeImgs] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        setAllMemeImgs(response.data.memes)
      })
  }, [])
  

  return (
    <div className="meme">
      <h2 className="top">{topText}</h2>
      <h2 className="bottom">{bottomText}</h2>
      <img src={randomImg} alt=""/>
    </div>
  )
}

export default MemeGenerator