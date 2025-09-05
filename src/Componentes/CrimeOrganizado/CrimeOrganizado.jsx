import "./CrimeOrganizado.css";
import "./CrimeOrganizadoResponsividade.css";

const CrimeOrganizado = () => {
  return (
    <div className="caixa-crime-organizado">
      <div className="caixa-conteudo-crime-organizado">
        <h2 className="crime-organizado-h2">
          DESCUBRA O MUNDO IMPLACÁVEL DO CRIME ORGANIZADO
        </h2>

        <p className="paisagens-sicilia-p">
          As paisagens rústicas do interior da Sicília contrastam com a sujeira
          dos becos da cidade, mas a violência e a traição do submundo correm
          fundo por toda parte. Na calada da noite e longe de olhares curiosos,
          famílias rivais e líderes impiedosos travam incessantes guerras por
          território. A confiança é um artigo frágil; a lealdade, uma arma
          mortal.
        </p>

        <img
          className="img-vermelho"
          src="img-vermelho.png"
          alt="img vernelho"
        />
      </div>
    </div>
  );
};

export default CrimeOrganizado;
