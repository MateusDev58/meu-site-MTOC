import "./Conta.css";
import "./ContaResponsividade.css";

const Conta = () => {
  return (
    <div className="caixa-beneficios">
      <div className="caixa-beneficios-conteudo">
        <h2 className="beneficios-h2">BENEFÍCIOS DA CONTA 2K</h2>

        <p className="beneficios-p">
          Crie uma Conta 2K gratuita e aumente sua coleção no jogo com estes
          itens:
        </p>

        <ul className="lista-beneficios-ul">
          <li className="lista-beneficios-li">
            Mafia: The Old Country – carro de corrida "Garzia Tumulto"
          </li>

          <li className="lista-beneficios-li">
            Mafia: Definitive Edition – Black Cats Motorcycle Pack
          </li>

          <li className="lista-beneficios-li">
            Mafia II: Definitive Edition – Made Man Pack
          </li>

          <li className="lista-beneficios-li">
            Mafia III: Definitive Edition – roupa Clássico e revólver Il Duca
          </li>
        </ul>

        <p className="beneficios-p">
          Ao se juntar à lista da famiglia e se inscrever para receber
          newsletters e mensagens promocionais sobre a franquia Mafia da 2K e de
          suas afiliadas com sua Conta 2K vinculada, você também garante a
          espingarda personalizada "Lupara Tradituri" para sua coleção no jogo
          Mafia: The Old Country.
        </p>

        <p className="beneficios-p">
          Confira todas as informações clicando em “Saiba mais”.
        </p>

        <p className="beneficios-p">
          O resgate de cada recompensa requer conexão com a internet e uma Conta
          2K vinculada ao respectivo título da série Mafia. Limite de uma
          recompensa de cada tipo por Conta 2K. A recompensa será
          disponibilizada automaticamente no jogo correspondente. Oferta
          inválida onde for proibida. Os termos se aplicam.
        </p>

        <div className="caixa-beneficios-botao">
          <a
            target="_blank"
            className="reserve-agora cadastre-se"
            href="https://mafia.2k.com/pt-BR/portal-check/"
          >
            CADASTRE-SE
          </a>

          <a
            className="saiba-mais"
            target="_blank"
            href="https://mafia.2k.com/pt-BR/2k-account-rewards/"
          >
            SAIBA MAIS
          </a>
        </div>
      </div>

      <div className="wrapper-img">
        <img
          className="trilogia-mafia-img"
          src="trilogia-mafia-img.avif"
          alt=" Trilogia mafia img"
        />
      </div>
    </div>
  );
};

export default Conta;
