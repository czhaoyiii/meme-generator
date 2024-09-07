import { useEffect } from "react";
import { useState } from "react";

export default function Meme() {
  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageURL: "https://i.imgflip.com/3nx72a.png",
  });

  function toggle(event) {
    event.preventDefault();
    const random = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageURL: url,
    }));
  }

  function textChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="memeContainer">
      <form>
        <div className="memeTextContainer">
          <label className="memeTextLabel">
            Top text
            <input
              type="text"
              className="memeText"
              placeholder="Top text"
              onChange={textChange}
              name="topText"
              value={meme.topText}
            />
          </label>
          <label className="memeTextLabel">
            Bottom text
            <input
              type="text"
              className="memeText"
              placeholder="Bottom text"
              onChange={textChange}
              name="bottomText"
              value={meme.bottomText}
            />
          </label>
        </div>
        <button className="memeButton" onClick={toggle}>
          Get a new meme image 🖼️
        </button>
      </form>
      <div className="meme">
        <img src={meme.imageURL} alt="" className="memeImage" />
        <h2 className="topMemeText">{meme.topText}</h2>
        <h2 className="bottomMemeText">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
