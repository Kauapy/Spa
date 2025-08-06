import React from "react";
import { useParams } from "react-router-dom";
import posts from "../json/posts.json";
import PostModelo from "paginas/PostModelo/PostModelo";
import ReactMarkdown from "react-markdown";
import "./Post.css";

const Post = () => {
  const parametros = useParams();
  console.log(parametros.id);
  

  const post = posts.find(p => String(p.id) === parametros.id);

  if(!post){
    return <div>Post não encontrado</div>;
  }


  return (
    <PostModelo
      fotoCapa={`/assets/post/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
};

export default Post;
