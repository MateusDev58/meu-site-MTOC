import { useEffect } from "react";
import "./Media.css";
import "./MediaResponsividade.css";

const Media = () => {
  useEffect(() => {
    const modal = document.querySelector(".caixa-modal");
    if (!modal) return;

    const imagens = [...modal.querySelectorAll(".img-carousel-media-celular")];
    let atual = 0;

    const mostrar = (n) => {
      imagens[atual]?.classList.remove("ativo");
      atual = (n + imagens.length) % imagens.length;
      imagens[atual].classList.add("ativo");
    };

    const abrir = (n) => {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
      mostrar(Number.isInteger(n) ? n : 0);
    };

    const fechar = () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    };

    const onClick = (e) => {
      const t = e.target;

      if (t.closest(".botao-fechar") || t === modal) return fechar();

      if (t.closest(".seta-seta-esq")) return mostrar(atual - 1);
      if (t.closest(".seta-seta-dir")) return mostrar(atual + 1);

      if (
        (t.matches(".img-carousel-media") ||
          t.matches(".img-carousel-media-celular")) &&
        !modal.contains(t)
      ) {
        const idx = imagens.findIndex((im) => im.src === t.src);
        return abrir(idx !== -1 ? idx : 0);
      }
    };

    document.addEventListener("click", onClick);
    fechar();

    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="caixa-media">
      <input
        className="radio-media"
        type="radio"
        id="numero1"
        name="media-slider"
        defaultChecked
      />
      <input
        className="radio-media"
        type="radio"
        id="numero2"
        name="media-slider"
      />
      <input
        className="radio-media"
        type="radio"
        id="numero3"
        name="media-slider"
      />
      <input
        className="radio-media"
        type="radio"
        id="numero4"
        name="media-slider"
      />
      <input
        className="radio-media"
        type="radio"
        id="numero5"
        name="media-slider"
      />
      <input
        className="radio-media"
        type="radio"
        id="numero6"
        name="media-slider"
      />
      <input
        className="radio-media"
        type="radio"
        id="numero7"
        name="media-slider"
      />
      <input
        className="radio-media"
        type="radio"
        id="numero8"
        name="media-slider"
      />
      <input
        className="radio-media"
        type="radio"
        id="numero9"
        name="media-slider"
      />

      <div>
        <div className="caixa-titulo-media">
          <h2 className="media-h2">MEDIA</h2>
          <img
            className="vermelho-media"
            src="img-vermelho.png"
            alt="img vermelho"
          />
        </div>

        <div className="caixa-slider-media">
          <div className="caixa-desktop-trilho">
            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media"
                src="imagem-carousel-1.avif"
                alt="img carousel"
              />
              <img
                className="img-carousel-media"
                src="imagem-carousel-2.avif"
                alt="img carousel"
              />
              <img
                className="img-carousel-media"
                src="imagem-carousel-3.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media"
                src="imagem-carousel-4.avif"
                alt="img carousel"
              />
              <img
                className="img-carousel-media"
                src="imagem-carousel-5.avif"
                alt="img carousel"
              />
              <img
                className="img-carousel-media"
                src="imagem-carousel-6.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media"
                src="imagem-carousel-7.avif"
                alt="img carousel"
              />
              <img
                className="img-carousel-media"
                src="imagem-carousel-8.avif"
                alt="img carousel"
              />
              <img
                className="img-carousel-media"
                src="imagem-carousel-9.avif"
                alt="img carousel"
              />
            </div>
          </div>

          <div className="caixa-tablet-trilho">
            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media"
                src="imagem-carousel-1.avif"
                alt="img carousel"
              />
              <img
                className="img-carousel-media"
                src="imagem-carousel-2.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media"
                src="imagem-carousel-3.avif"
                alt="img carousel"
              />
              <img
                className="img-carousel-media"
                src="imagem-carousel-4.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media"
                src="imagem-carousel-7.avif"
                alt="img carousel"
              />
              <img
                className="img-carousel-media"
                src="imagem-carousel-8.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media"
                src="imagem-carousel-5.avif"
                alt="img carousel"
              />
              <img
                className="img-carousel-media"
                src="imagem-carousel-6.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media"
                src="imagem-carousel-9.avif"
                alt="img carousel"
              />
            </div>
          </div>

          {/* bloco 3 para telas 767px */}
          <div className="caixa-celulares-trilho">
            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media-celular"
                src="imagem-carousel-1.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media-celular"
                src="imagem-carousel-2.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media-celular"
                src="imagem-carousel-3.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media-celular"
                src="imagem-carousel-4.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media-celular"
                src="imagem-carousel-5.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media-celular"
                src="imagem-carousel-6.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media-celular"
                src="imagem-carousel-7.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media-celular"
                src="imagem-carousel-8.avif"
                alt="img carousel"
              />
            </div>

            <div className="caixa-conteudo-slider">
              <img
                className="img-carousel-media-celular"
                src="imagem-carousel-9.avif"
                alt="img carousel"
              />
            </div>
          </div>
        </div>

        {/* labels de navegação */}
        <div className="caixa-navegacao-media">
          <label className="navegacao" htmlFor="numero1"></label>
          <label className="navegacao" htmlFor="numero2"></label>
          <label className="navegacao" htmlFor="numero3"></label>
          <label className="navegacao" htmlFor="numero4"></label>
          <label className="navegacao" htmlFor="numero5"></label>
          <label className="navegacao" htmlFor="numero6"></label>
          <label className="navegacao" htmlFor="numero7"></label>
          <label className="navegacao" htmlFor="numero8"></label>
          <label className="navegacao" htmlFor="numero9"></label>
        </div>
      </div>

      {/* modal  */}
      <div className="caixa-modal">
        <div className="caixa-imagem-modal">
          <img
            className="img-carousel-media-celular ativo"
            src="imagem-carousel-1.avif"
            alt="img carousel"
          />
          <img
            className="img-carousel-media-celular"
            src="imagem-carousel-2.avif"
            alt="img carousel"
          />
          <img
            className="img-carousel-media-celular"
            src="imagem-carousel-3.avif"
            alt="img carousel"
          />
          <img
            className="img-carousel-media-celular"
            src="imagem-carousel-4.avif"
            alt="img carousel"
          />
          <img
            className="img-carousel-media-celular"
            src="imagem-carousel-5.avif"
            alt="img carousel"
          />
          <img
            className="img-carousel-media-celular"
            src="imagem-carousel-6.avif"
            alt="img carousel"
          />
          <img
            className="img-carousel-media-celular"
            src="imagem-carousel-7.avif"
            alt="img carousel"
          />
          <img
            className="img-carousel-media-celular"
            src="imagem-carousel-8.avif"
            alt="img carousel"
          />
          <img
            className="img-carousel-media-celular"
            src="imagem-carousel-9.avif"
            alt="img carousel"
          />

          <button className="botao-fechar" aria-label="Fechar">
            X
          </button>

          <button className="seta-seta-esq" aria-label="Anterior">
            ‹
          </button>

          <button className="seta-seta-dir" aria-label="Próxima">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Media;
