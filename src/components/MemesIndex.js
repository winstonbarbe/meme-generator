import React, { useState, useEffect } from "react"
import MemeDisplay from "./MemeDisplay"

function MemesIndex() {
  const [savedMemes, setSavedMemes] = useState([])

  useEffect(() => {
    fetch("/memes.json")
      .then(response => response.json())
      .then(response => {
        setSavedMemes(response.data.map(meme => {
          return (
            <MemeDisplay data={{topText: meme.topText, bottomText: meme.bottomText, url: meme.url}} key={meme.id}/>
          )
        }))
      })
  }, [])
  return (
    <div className="memes-index">
      <h4>Howdy World</h4>
      {savedMemes}

    </div>
  )
}

export default MemesIndex