import "./CarrosselInfinito.css";
import "./CarrosselInfinitoResponsividade.css";

const CarrosselInfinito = () => {
  return (
    <div className="caixa-slide">
      <div className="pagina-slide">
        <div className="caixa-conteudo-slide">
          <p className="slide-p"> “ONE OF 2025'S BEST NARRATIVE TITLES”</p>
          <cite className="slide-p-2">- DualShockers</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">“LIKE PLAYING THROUGH A CLASSIC MOB MOVIE”</p>
          <cite className="slide-p-2">- Destructoid</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">
            “A BEAUTIFUL VERSION OF EARLY 1900's SICILY”
          </p>
          <cite className="slide-p-2">- VGC</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p"> “A MUST PLAY”</p>
          <cite className="slide-p-2">- GamingTrend</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p"> “I'M OBSESSED WITH THIS WHOLE CAST”</p>
          <cite className="slide-p-2">- Easy Allies</cite>
        </div>

        {/* bloco 2 (repetição para o loop) */}
        <div className="caixa-conteudo-slide">
          <p className="slide-p"> “ONE OF 2025'S BEST NARRATIVE TITLES”</p>
          <cite className="slide-p-2">- DualShockers</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">“LIKE PLAYING THROUGH A CLASSIC MOB MOVIE”</p>
          <cite className="slide-p-2">- Destructoid</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">
            “A BEAUTIFUL VERSION OF EARLY 1900's SICILY”
          </p>
          <cite className="slide-p-2">- VGC</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p"> “A MUST PLAY”</p>
          <cite className="slide-p-2">- GamingTrend</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p"> “I'M OBSESSED WITH THIS WHOLE CAST”</p>
          <cite className="slide-p-2">- Easy Allies</cite>
        </div>
      </div>
    </div>
  );
};

export default CarrosselInfinito;
