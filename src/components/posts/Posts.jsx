import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzilsrox1351bECnEzpdGsKYjKdEDN7fSAQ&s" />
      <Post img="https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg" />
      <Post img="https://hips.hearstapps.com/hmg-prod/images/finger-foods-beef-empanadas-1671735272.jpeg?crop=1.00xw:1.00xh;0,0&resize=1200:*"/>
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BKFoBIPxdppLn61m02UM4NL5cr5GkwEHpGQjceqwNw&s"/>
      <Post img="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg?quality=82&strip=1"/>
    </div>
  );
}