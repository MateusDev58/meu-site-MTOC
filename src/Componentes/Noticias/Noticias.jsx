import "./Noticias.css";
import "./NoticiasResponsividade.css";

const Noticias = () => {
  return (
    <div className="caixa-noticias">
      <div className="caixa-conteudo-noticias">
        {/* rádios */}
        <input
          className="radio-noticias"
          type="radio"
          id="noticia-1"
          name="noticias-slider"
          defaultChecked
        />
        <input
          className="radio-noticias"
          type="radio"
          id="noticia-2"
          name="noticias-slider"
        />
        <input
          className="radio-noticias"
          type="radio"
          id="noticia-3"
          name="noticias-slider"
        />
        <input
          className="radio-noticias"
          type="radio"
          id="noticia-4"
          name="noticias-slider"
        />
        <input
          className="radio-noticias"
          type="radio"
          id="noticia-5"
          name="noticias-slider"
        />
        <input
          className="radio-noticias"
          type="radio"
          id="noticia-6"
          name="noticias-slider"
        />
        <input
          className="radio-noticias"
          type="radio"
          id="noticia-7"
          name="noticias-slider"
        />
        <input
          className="radio-noticias"
          type="radio"
          id="noticia-8"
          name="noticias-slider"
        />
        <input
          className="radio-noticias"
          type="radio"
          id="noticia-9"
          name="noticias-slider"
        />

        <div className="caixa-noticias-h2">
          <h2 className="noticias-h2">NOTÍCIAS</h2>
          <img
            className="vermelho-media"
            src="img-vermelho.png"
            alt="img vermelho"
          />
        </div>

        {/* bloco 1  */}
        <div className="faixa-slider">
          <div className="caixa-slider-noticias-desktop">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-FREE_RIDE.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Atualização gratuita trará o modo Direção livre para Mafia:
                  The Old Country
                </h3>
                <p className="textos-noticias-p">
                  Em breve, todos os jogadores receberão o modo Direção livre em
                  uma atualização gratuita.
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/free-ride-mode/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-2.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Dicas úteis para Mafia: The Old Country
                </h3>
                <p className="textos-noticias-p">
                  Veja como sobreviver no submundo brutal da Sicília dos anos
                  1900 com estas dicas valiosas.
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/quick-tips/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-3.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Mafia: The Old Country já está disponível
                </h3>
                <p className="textos-noticias-p">
                  Mafia: The Old Country já está disponível para PlayStation 5,
                  Xbox Series X|S e PC via Steam.
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/mafia-the-old-country-out-now/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== bloco 2 ===== */}
          <div className="caixa-slider-noticias-desktop">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-4.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Tudo sobre a jogabilidade de Mafia: The Old Country
                </h3>
                <p className="textos-noticias-p">
                  Prepare-se para mergulhar de cabeça no mundo de Mafia: The Old
                  Country com esta série especial em três episódios.
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/gameplay-deep-dive-videos-family-code/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="imagem-carousel-9.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Preparando a iniciação: perguntas da comunidade nº 2
                </h3>
                <p className="textos-noticias-p">
                  Mais respostas para algumas das perguntas mais aguardadas da
                  comunidade sobre Mafia: The Old Country.
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/community-q-and-a-2/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="imagem-carousel-8.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Mafia: The Old Country Especificações e recursos para PC
                </h3>
                <p className="textos-noticias-p">
                  Veja a seguir as especificações de hardware necessárias para
                  rodar Mafia: The Old Country no PC, além de listas de recursos
                  e configurações gráficas.
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/pc-specs/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== bloco 3 ===== */}
          <div className="caixa-slider-noticias-desktop">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-5.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Mafia: The Old Country: horários do lançamento mundial
                </h3>
                <p className="textos-noticias-p">
                  Confira os horários do lançamento mundial de Mafia: The Old
                  Country para cada região e plataforma!
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/global-launch-timings/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="imagem-carousel-5.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Cobertura do IGN First de Mafia: The Old Country
                </h3>

                <p className="textos-noticias-p">
                  Confira as quatro semanas da cobertura do IGN First, que vai
                  mergulhar no submundo do crime na Sicília no início do século
                  XX.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/quick-tips/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-6.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Os bastidores da atmosfera sonora autêntica e imersiva de
                  Mafia: The Old Country
                </h3>

                <p className="textos-noticias-p">
                  O som é peça-chave em qualquer produção cinematográfica. E na
                  franquia Mafia, com sua narrativa interativa e produção de
                  ponta, esse papel ganha ainda mais importância.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/dev-diary-4-sound/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slider para tablet */}
        <div className="faixa-slider-tablet">
          {/* bloco 1 */}
          <div className="caixa-slider-noticias-tablet">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-FREE_RIDE.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Atualização gratuita trará o modo Direção livre para Mafia:
                  The Old Country
                </h3>

                <p className="textos-noticias-p">
                  Em breve, todos os jogadores receberão o modo Direção livre em
                  uma atualização gratuita.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/free-ride-mode/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-2.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Os bastidores da atmosfera sonora autêntica e imersiva de
                  Mafia: The Old Country
                </h3>

                <p className="textos-noticias-p">
                  Veja como sobreviver no submundo brutal da Sicília dos anos
                  1900 com estas dicas valiosas.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/quick-tips/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bloco 2 */}
          <div className="caixa-slider-noticias-tablet">
            {/* card 3 */}
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-3.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Mafia: The Old Country já está disponível
                </h3>

                <p className="textos-noticias-p">
                  Mafia: The Old Country já está disponível para PlayStation 5,
                  Xbox Series X|S e PC via Steam.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/mafia-the-old-country-out-now/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-4.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Tudo sobre a jogabilidade de Mafia: The Old Country
                </h3>

                <p className="textos-noticias-p">
                  Prepare-se para mergulhar de cabeça no mundo de Mafia: The Old
                  Country com esta série especial em três episódios.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/gameplay-deep-dive-videos-family-code/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bloco 3 */}
          <div className="caixa-slider-noticias-tablet">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="imagem-carousel-9.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Preparando a iniciação: perguntas da comunidade nº 2
                </h3>

                <p className="textos-noticias-p">
                  Mais respostas para algumas das perguntas mais aguardadas da
                  comunidade sobre Mafia: The Old Country.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/community-q-and-a-2/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            {/* card 6 */}
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="imagem-carousel-8.avif"
                alt="conteudo img slider"
              />

              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Mafia: The Old Country Especificações e recursos para PC
                </h3>

                <p className="textos-noticias-p">
                  Veja a seguir as especificações de hardware necessárias para
                  rodar Mafia: The Old Country no PC, além de listas de recursos
                  e configurações gráficas.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/pc-specs/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bloco 4 */}
          <div className="caixa-slider-noticias-tablet">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-5.avif"
                alt="conteudo img slider"
              />

              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Mafia: The Old Country: horários do lançamento mundial
                </h3>

                <p className="textos-noticias-p">
                  Confira os horários do lançamento mundial de Mafia: The Old
                  Country para cada região e plataforma!
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/global-launch-timings/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            {/* card 8 */}
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="imagem-carousel-5.avif"
                alt="conteudo img slider"
              />

              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Cobertura do IGN First de Mafia: The Old Country
                </h3>

                <p className="textos-noticias-p">
                  Confira as quatro semanas da cobertura do IGN First, que vai
                  mergulhar no submundo do crime na Sicília no início do século
                  XX.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/quick-tips/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="caixa-slider-noticias-tablet">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-6.avif"
                alt="conteudo img slider"
              />

              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Os bastidores da atmosfera sonora autêntica e imersiva de
                  Mafia: The Old Country
                </h3>

                <p className="textos-noticias-p">
                  O som é peça-chave em qualquer produção cinematográfica. E na
                  franquia Mafia, com sua narrativa interativa e produção de
                  ponta, esse papel ganha ainda mais importância.
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    target="_blank"
                    className="sabiba-mais-noticias"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/dev-diary-4-sound/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>

            <div className="caixa-conteudo-slider-noticias-2"></div>
          </div>
        </div>

        {/* slider para celular */}

        <div className="faixa-slider-celular">
          {/* bloco 1 */}
          <div className="caixa-slider-noticias-celular">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-FREE_RIDE.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Atualização gratuita trará o modo Direção livre para Mafia:
                  The Old Country
                </h3>
                <p className="textos-noticias-p">
                  Em breve, todos os jogadores receberão o modo Direção livre em
                  uma atualização gratuita.
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    className="sabiba-mais-noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/free-ride-mode/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bloco 2 */}
          <div className="caixa-slider-noticias-celular">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-2.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Dicas úteis para Mafia: The Old Country
                </h3>

                <p className="textos-noticias-p">
                  Veja como sobreviver no submundo brutal da Sicília dos anos
                  1900 com estas dicas valiosas.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    className="sabiba-mais-noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/quick-tips/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bloco 3 */}
          <div className="caixa-slider-noticias-celular">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-3.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Mafia: The Old Country já está disponível
                </h3>
                <p className="textos-noticias-p">
                  Mafia: The Old Country já está disponível para PlayStation 5,
                  Xbox Series X|S e PC via Steam.
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    className="sabiba-mais-noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/mafia-the-old-country-out-now/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bloco 4 */}
          <div className="caixa-slider-noticias-celular">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-4.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Tudo sobre a jogabilidade de Mafia: The Old Country
                </h3>
                <p className="textos-noticias-p">
                  Prepare-se para mergulhar de cabeça no mundo de Mafia: The Old
                  Country com esta série especial em três episódios.
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    className="sabiba-mais-noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/gameplay-deep-dive-videos-family-code/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bloco 5 */}
          <div className="caixa-slider-noticias-celular">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="imagem-carousel-9.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Preparando a iniciação: perguntas da comunidade nº 2
                </h3>
                <p className="textos-noticias-p">
                  Mais respostas para algumas das perguntas mais aguardadas da
                  comunidade sobre Mafia: The Old Country.
                </p>
                <div className="caixa-sabiba-mais-noticias">
                  <a
                    className="sabiba-mais-noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/community-q-and-a-2/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bloco 6 */}
          <div className="caixa-slider-noticias-celular">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="imagem-carousel-8.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Mafia: The Old Country Especificações e recursos para PC
                </h3>

                <p className="textos-noticias-p">
                  Veja a seguir as especificações de hardware necessárias para
                  rodar Mafia: The Old Country no PC, além de listas de recursos
                  e configurações gráficas
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    className="sabiba-mais-noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/pc-specs/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bloco 7 */}
          <div className="caixa-slider-noticias-celular">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-5.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Mafia: The Old Country: horários do lançamento mundial
                </h3>

                <p className="textos-noticias-p">
                  Confira os horários do lançamento mundial de Mafia: The Old
                  Country para cada região e plataforma!
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    className="sabiba-mais-noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/global-launch-timings/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bloco 8 */}
          <div className="caixa-slider-noticias-celular">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="imagem-carousel-5.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Cobertura do IGN First de Mafia: The Old Country
                </h3>

                <p className="textos-noticias-p">
                  Confira as quatro semanas da cobertura do IGN First, que vai
                  mergulhar no submundo do crime na Sicília no início do século
                  XX.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    className="sabiba-mais-noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/quick-tips/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bloco 9 */}
          <div className="caixa-slider-noticias-celular">
            <div className="caixa-conteudo-slider-noticias">
              <img
                className="imagem-slider-noticias"
                src="img-noticias-6.avif"
                alt="conteudo img slider"
              />
              <div className="caixa-textos-noticias">
                <h3 className="titulo-h3">
                  Os bastidores da atmosfera sonora autêntica e imersiva de
                  Mafia: The Old Country
                </h3>

                <p className="textos-noticias-p">
                  O som é peça-chave em qualquer produção cinematográfica. E na
                  franquia Mafia, com sua narrativa interativa e produção de
                  ponta, esse papel ganha ainda mais importância.
                </p>

                <div className="caixa-sabiba-mais-noticias">
                  <a
                    className="sabiba-mais-noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mafia.2k.com/pt-BR/the-old-country/news/dev-diary-4-sound/"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* navegação  */}
        <div className="caixa-navegacao-noticias">
          <label className="navegacao-noticias" htmlFor="noticia-1"></label>
          <label className="navegacao-noticias" htmlFor="noticia-2"></label>
          <label className="navegacao-noticias" htmlFor="noticia-3"></label>
          <label className="navegacao-noticias" htmlFor="noticia-4"></label>
          <label className="navegacao-noticias" htmlFor="noticia-5"></label>
          <label className="navegacao-noticias" htmlFor="noticia-6"></label>
          <label className="navegacao-noticias" htmlFor="noticia-7"></label>
          <label className="navegacao-noticias" htmlFor="noticia-8"></label>
          <label className="navegacao-noticias" htmlFor="noticia-9"></label>
        </div>

        <div className="caixa-mais-noticias">
          <a
            className="reserve-agora mais-noticias"
            target="_blank"
            href="https://mafia.2k.com/pt-BR/the-old-country/news/"
          >
            MAIS NOTÍCIAS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
