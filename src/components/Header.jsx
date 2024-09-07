import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={trollFace} alt="" className="logoImage" />
        <h1 className="logoTitle">Meme Generator</h1>
      </div>
      <h2 className="headerDesc">React Course - Project 3</h2>
    </div>
  );
}
