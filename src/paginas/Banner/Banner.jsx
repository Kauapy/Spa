import React from "react";
import "./Banner.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.png";
const Banner = () => {
  return (
    <div className="banner">
      <div className="apresentacao">
        <h1 className="titulo">Bem-vindo ao nosso site!</h1>
        <p className="paragrafo">
          Aqui você encontrará uma variedade de produtos e serviços que atendem
          às suas necessidades. Navegue por nossas seções para descobrir tudo o
          que temos a oferecer.
        </p>
      </div>

      <div className="imagens">
        <img
          className="circuloColorido"
          src={circuloColorido}
          aria-hidden={true}
        ></img>

        <img className="minhaFoto" src={minhaFoto} alt="Foto do dev">
        </img>
      </div>
    </div>
  );
};

export default Banner;
