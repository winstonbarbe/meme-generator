import React, { useState, useEffect } from "react"
function MemesIndex() {
  const [savedMemes, setSavedMemes] = useState([])

  useEffect(() => {
    fetch("/memes.json")
      .then(response => response.json())
      .then(response => {
        setSavedMemes(response.data.map(meme => {
          return (
            <div className="meme" key={meme.id}>
              <h2 className="top">{meme.topText}</h2>
              <h2 className="bottom">{meme.bottomText}</h2>
              <img src={meme.url} alt=""/>
            </div>
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