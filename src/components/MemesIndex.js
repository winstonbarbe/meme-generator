import React, { useState, useEffect } from "react"
import {
  Link
} from "react-router-dom";
import MemeDisplay from "./MemeDisplay"

function MemesIndex() {
  const [savedMemes, setSavedMemes] = useState([])
  function handleClick (e) {

  }

  useEffect(() => {
    fetch("/memes.json")
      .then(response => response.json())
      .then(response => {
        setSavedMemes(response.data.map(meme => {
          return (
            <MemeDisplay data={meme} key={meme.id}/>
          )
        }))
      })
  }, [])
  return (
    <div className="memes-index">
      {savedMemes.map(savedMeme => {
        return (
          <div className="big-meme" onClick={handleClick}>
            {savedMeme}
            <span>Creator: <Link to="/memes-index">Hello</Link></span>
          </div>
        )
      })}

    </div>
  )
}

export default MemesIndex