import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="data:image/png;base64,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"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}