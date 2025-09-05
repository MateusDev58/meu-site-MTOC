import "./DeluxeEdition.css";
import "./DeluxeEditionResponsividade.css";

const DeluxeEdition = () => {
  return (
    <div className="caixa-deluxe">
      <input
        className="controle"
        type="radio"
        name="slide"
        id="slide1"
        defaultChecked
      />
      <input className="controle" type="radio" name="slide" id="slide2" />

      <div className="faixa-slides ">
        <div className="conteudo-deluxe">
          <div className="caixa-imagem-deluxe">
            <img
              className="imagem-deluxe"
              src="Deluxe_1.avif"
              alt="EDIÇÃO DELUXE DE MAFIA THE OLD COUNTRY"
            />
          </div>

          <div className="caixa-deluxe-h2">
            <h2 className="deluxe-h2">
              EDIÇÃO DELUXE DE MAFIA: THE OLD COUNTRY
            </h2>
          </div>

          <div className="caixa-botao-deluxe">
            <a
              className="reserve-agora botao--deluxe"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mafia.2k.com/pt-BR/the-old-country/buy/?release=mafia-the-old-country-deluxe-edition"
            >
              COMPRE JÁ
            </a>
          </div>

          <div className="caixa-texto-deluxe">
            <p className="texto-deluxe">
              A Edição Deluxe de Mafia: The Old Country leva você ao submundo do
              crime na Sicília no melhor estilo mafioso, com uma variedade de
              itens bônus para sua coleção.
            </p>
            <p className="texto-deluxe">🗡 Jogo base completo</p>
            <p className="texto-deluxe">🗡 Pacote Padrino</p>
            <p className="texto-deluxe">🗡 Pacote Gatto Nero</p>
            <p className="texto-deluxe">🗡 Livro de arte digital</p>
            <p className="texto-deluxe">🗡 Trilha sonora original</p>
          </div>
        </div>

        {/* Parte 2 STANDARD */}
        <div className="conteudo-deluxe">
          <div className="caixa-imagem-deluxe">
            <img
              className="imagem-deluxe"
              src="Standard_img.avif"
              alt="EDIÇÃO STANDARD DE MAFIA: THE OLD COUNTRY"
            />
          </div>

          <div className="caixa-deluxe-h2">
            <h2 className="deluxe-h2">
              EDIÇÃO STANDARD DE MAFIA: THE OLD COUNTRY
            </h2>
          </div>

          <div className="caixa-botao-deluxe">
            <a
              className="reserve-agora botao--deluxe"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mafia.2k.com/pt-BR/the-old-country/buy/?release=mafia-the-old-country-standard-edition"
            >
              COMPRE JÁ
            </a>
          </div>

          <div className="caixa-texto-deluxe">
            <p className="texto-deluxe">
              Descubra as origens do crime organizado em Mafia: The Old Country,
              uma conturbada história de máfia ambientada no submundo brutal da
              Sicília do início do século XX.
            </p>
            <p className="texto-deluxe">🗡 Jogo base completo</p>
          </div>
        </div>
      </div>

      <div className="botoes-slide">
        <label htmlFor="slide1" className="botoes"></label>
        <label htmlFor="slide2" className="botoes"></label>
      </div>
    </div>
  );
};

export default DeluxeEdition;
