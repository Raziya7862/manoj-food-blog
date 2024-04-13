import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.dribbble.com/users/5246351/screenshots/13929150/media/a784069618028fe9374f915d8f915279.jpg"
        alt=""
      />
    </div>
  );
}