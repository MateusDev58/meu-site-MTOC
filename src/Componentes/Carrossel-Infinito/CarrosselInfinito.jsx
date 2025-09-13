import "./CarrosselInfinito.css";
import "./CarrosselInfinitoResponsividade.css";

const CarrosselInfinito = () => {
  return (
    <div className="caixa-slide">
      <div className="pagina-slide">
        <div className="caixa-conteudo-slide">
          <p className="slide-p">
            “UM DOS MELHORES TÍTULOS DE NARRATIVA DE 2025”
          </p>
          <cite className="slide-p-2">- DualShockers</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">
            “É COMO FAZER PARTE DE UM FILME CLÁSSICO SOBRE A MÁFIA”
          </p>
          <cite className="slide-p-2">- Destructoid</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">
            “UMA LINDA VERSÃO DA SICÍLIA DO INÍCIO DO SÉCULO XX”
          </p>
          <cite className="slide-p-2">- VGC</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">“IMPERDÍVEL”</p>
          <cite className="slide-p-2">- GamingTrend</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">“ME APAIXONEI POR ESSE ELENCO”</p>
          <cite className="slide-p-2">- Easy Allies</cite>
        </div>

        {/* bloco 2 (repetição para o loop) */}
        <div className="caixa-conteudo-slide">
          <p className="slide-p">
            “UM DOS MELHORES TÍTULOS DE NARRATIVA DE 2025”
          </p>
          <cite className="slide-p-2">- DualShockers</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">
            “É COMO FAZER PARTE DE UM FILME CLÁSSICO SOBRE A MÁFIA”
          </p>
          <cite className="slide-p-2">- Destructoid</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">
            “UMA LINDA VERSÃO DA SICÍLIA DO INÍCIO DO SÉCULO XX”
          </p>
          <cite className="slide-p-2">- VGC</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">“IMPERDÍVEL”</p>
          <cite className="slide-p-2">- GamingTrend</cite>
        </div>

        <div className="caixa-conteudo-slide">
          <p className="slide-p">“ME APAIXONEI POR ESSE ELENCO”</p>
          <cite className="slide-p-2">- Easy Allies</cite>
        </div>
      </div>
    </div>
  );
};

export default CarrosselInfinito;
