import {
  Link
} from "react-router-dom";

function MemeDisplay (props) {
  return (
    <div className="big-meme">
      <div className="meme">
        <h2 className="top">{props.data.topText}</h2>
        <h2 className="bottom">{props.data.bottomText}</h2>
        <img src={props.data.url} alt=""/>
      </div>
      {props.data.created_by && <span>Creator: <Link to="/memes-index">{props.data.created_by.email}</Link></span>}

    </div>
  )
}

export default MemeDisplay