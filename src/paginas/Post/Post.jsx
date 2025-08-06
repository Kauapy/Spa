import React from "react";
import { useParams } from "react-router-dom";
import posts from "../json/posts.json";
import PostModelo from "paginas/PostModelo/PostModelo";

const Post = () => {
  const parametros = useParams();
  console.log(parametros.id);
  

  const post = posts.find(p => String(p.id) === parametros.id);


  return (
    <PostModelo
      fotoCapa={`/assets/post/${post.id}/capa.png`}
      titulo={post.titulo}
    > Funciona por favor</PostModelo>
  );
};

export default Post;
