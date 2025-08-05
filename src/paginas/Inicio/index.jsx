import "./inicio.css";
import posts from "../json/posts.json";
import Posts from "paginas/Post/Post";

export default function Inicio() {
  return (
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}> <Posts post={post}></Posts> </li>
        ))}
      </ul>
  );
}
