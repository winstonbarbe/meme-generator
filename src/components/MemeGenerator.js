/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function MemeGenerator () {
  const [topText, setTopText] = useState("Top Meme Content");
  const [bottomText, setBottomText] = useState("Bottom Meme Content");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")

  

  return (
    <div className="meme">
      <h2 className="top">{topText}</h2>
      <h2 className="bottom">{bottomText}</h2>
      <img src={randomImg} alt=""/>
    </div>
  )
}

export default MemeGenerator