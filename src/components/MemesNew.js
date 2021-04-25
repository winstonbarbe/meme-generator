/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import MemeDisplay from './MemeDisplay'

function MemesNew () {
  const [text, setText] = useState({topText: "", bottomText: ""})
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
  const [allMemeImgs, setAllMemeImgs] = useState([])
  
  

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        setAllMemeImgs(response.data.memes)
      })
  }, [])

  function handleChange(e) {
    const {name, value } = e.target
    setText({...text, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    const randNum = Math.floor(Math.random() * allMemeImgs.length)
    const randUrl = allMemeImgs[randNum].url
    setRandomImg(randUrl)
  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <form onSubmit={handleSubmit} className="meme-form">
        <input 
          type="text"
          name="topText"
          value={text.topText}
          placeholder="Top Text"
          onChange={handleChange}
        />
        <input 
          type="text"
          name="bottomText"
          value={text.bottomText}
          placeholder="Bottom Text"
          onChange={handleChange}
        />
        <button type="submit">Gen</button>
      </form>
      <div className="big-meme">
        <MemeDisplay data={{topText: text.topText, bottomText: text.bottomText, url: randomImg}} />
      </div>
    </div>
    
  )
}

export default MemesNew