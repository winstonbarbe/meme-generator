import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <header>
      <img src="https://image.shutterstock.com/image-vector/cartoon-shouting-mouth-red-lipstick-260nw-120084256.jpg" alt="" />
      <p>MemeGenerator</p>
      <nav className="header-nav">
        <ul style={{listStyleType: "none", display: "flex", justifyContent: "space-around", color: "white"}}>
          <li style={{color: "white"}}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/memes-new">New Meme</Link>
          </li>
          <li>
            <Link to="/memes-index">Memes Index</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header