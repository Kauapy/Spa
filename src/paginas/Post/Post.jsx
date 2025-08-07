import React from "react";
import { useParams } from "react-router-dom";
import posts from "../json/posts.json";
import PostModelo from "paginas/PostModelo/PostModelo";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import PageNotFound from "paginas/PageNotFound/PageNotFound";
import { Routes, Route } from "react-router-dom";
import PaginaPadrao from "paginas/PaginaPadrao/PaginaPadrao";

const Post = () => {
  const parametros = useParams();
  console.log(parametros.id);

  const post = posts.find((p) => String(p.id) === parametros.id);

  if (!post) {
    return <PageNotFound></PageNotFound>;
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/post/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModelo>
          }
        >
          {" "}
        </Route>
      </Route>
    </Routes>
  );
};

export default Post;
