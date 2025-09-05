import "./TrailerLançamento.css";
import "./TrailerLançamentoResponsividade.css";

const TrailerLançamento = () => {
  return (
    <div className="caixalancamento">
      <div className="caixalancamentoconteudo">
        <div className="caixa-titulo">
          <h1 className="titulo-h1">MAFIA: THE OLD COUNTRY ESTÁ DISPONÍVEL</h1>
          <img
            className="img-vermelho-1"
            src="img-vermelho.png"
            alt="imagem vermelha"
          />
        </div>

        <div className="caixa-video">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/EAEYZDgHNv8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="caixa-lancamento-p">
          <p className="lancamento-p">
            Descubra as origens do crime organizado em Mafia: The Old Country,
            uma conturbada história de máfia ambientada no submundo brutal da
            Sicília do início do século XX. Lute para sobreviver como Enzo
            Favara e prove seu valor para a famiglia nesta envolvente ação em
            terceira pessoa, que se passa em um momento histórico perigoso e
            implacável.
          </p>

          <p className="lancamento-p">
            Enzo é capaz de qualquer coisa para ter uma vida melhor. Depois de
            uma infância brutal marcada pelo trabalho forçado, ele está pronto
            para arriscar tudo e ser reconhecido como um homem de honra pela
            família Torrisi.
          </p>

          <p className="lancamento-p">
            Mas o juramento à máfia vem com um preço. Poder, provações,
            violência – e uma certeza absoluta:
          </p>

          <h2 className="titulo-h2">Família demanda sacrifícios.</h2>

          <p className="lancamento-p">
            Esta fantástica história ganha ainda mais vida com os visuais
            impressionantes, a narrativa cinematográfica e o realismo autêntico
            que consagrou a fama da aclamada série Mafia. A história de Enzo se
            passa em uma época em que a destreza com uma lâmina de estilete era
            letal, a espingarda lupara de cano cerrado era a arma de fogo
            preferida, vendettas derramavam sangue por gerações e os mafiosos
            patrulhavam seus territórios a pé, a cavalo ou ao volante dos
            primeiros automóveis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrailerLançamento;
