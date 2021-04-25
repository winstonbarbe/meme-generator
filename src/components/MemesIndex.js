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
            <MemeDisplay data={meme} key={meme.id}/>
          )
        }))
      })
  }, [])
  return (
    <div className="memes-index">
      {savedMemes}

    </div>
  )
}

export default MemesIndex