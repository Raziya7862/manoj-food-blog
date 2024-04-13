import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src=""
          alt=""
        />
        <h1 className="singlePostTitle">
          The Love For Food
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        Food is a thread that weaves through cultures and communities, bringing people together in shared experiences. From the comfort of a simple home-cooked meal to the joy of discovering a new cuisine, food nourishes not only our bodies but also our connections with each other. Whether it's the aroma of freshly baked bread wafting through the kitchen or the lively discussion around a festive table, food creates memories and strengthens bonds. Every bite holds the potential for a story, a tradition, or a burst of pure culinary delight.
        </p>
      </div>
    </div>
  );
}