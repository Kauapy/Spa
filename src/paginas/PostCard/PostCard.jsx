import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
    <div className="post">
      <img
        className="capa"
        src={`/assets/posts/${post.id}/capa.png`}
        alt="Imagem de capa do post"
      ></img>

      <h2 className="titulo2">
        {post.titulo}
      </h2>

      <button className="botaoLer">Ler</button>
    </div>
    </Link>
  );
};

export default PostCard;
