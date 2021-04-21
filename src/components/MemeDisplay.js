function MemeDisplay (props) {
  return (
    <div className="meme">
      <h2 className="top">{props.data.topText}</h2>
      <h2 className="bottom">{props.data.bottomText}</h2>
      <img src={props.data.url} alt=""/>
    </div>
  )
}

export default MemeDisplay