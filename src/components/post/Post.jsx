import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            The Love For Food
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Food is a thread that weaves through cultures and communities, bringing people together in shared experiences. From the comfort of a simple home-cooked meal to the joy of discovering a new cuisine, food nourishes not only our bodies but also our connections with each other. Whether it's the aroma of freshly baked bread wafting through the kitchen or the lively discussion around a festive table, food creates memories and strengthens bonds. Every bite holds the potential for a story, a tradition, or a burst of pure culinary delight.
      </p>
    </div>
  );
}