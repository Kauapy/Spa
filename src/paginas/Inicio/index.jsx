import "./inicio.css";
import posts from "../json/posts.json";
import Posts from "paginas/PostCard/PostCard";

export default function Inicio() {
  return (
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}> <Posts post={post}></Posts> </li>
        ))}
      </ul>
  );
}
