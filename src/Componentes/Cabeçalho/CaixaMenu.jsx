import CaixaIdioma from "./CaixaIdioma";
import "./CaixaMenu.css";

const CaixaMenu = ({ ativo }) => {
  return (
    <div className="caixa-principal">
      <div className="caixa-menu">
        <ul>
          <li className="lista-menu-2">
            <a
              className="lista-menu-a"
              target="_blank"
              href="https://mafia.2k.com/pt-BR/mafia/"
            >
              MAFIA
            </a>
          </li>

          <li className="lista-menu-2">
            <a
              className="lista-menu-a"
              href="https://mafia.2k.com/pt-BR/mafia-2/"
            >
              MAFIA II
            </a>
          </li>

          <li className="lista-menu-2">
            <a
              className="lista-menu-a"
              href="https://mafia.2k.com/pt-BR/mafia-3/"
            >
              MAFIA III
            </a>
          </li>

          <li className="lista-menu">
            <a
              className="lista-menu-a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mafia.2k.com/pt-BR/the-old-country/news/"
            >
              NOTÍCIAS
            </a>
          </li>

          <li className="lista-menu">
            <a
              className="lista-menu-a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mafia.2k.com/pt-BR/2k-account-rewards/"
            >
              BENEFÍCIOS DA CONTA 2K
            </a>
          </li>

          <li className="lista-menu">
            <a
              className="lista-menu-a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mafia.2k.com/pt-BR/the-old-country/faq/"
            >
              PERGUNTAS FREQUENTES
            </a>
          </li>
        </ul>

        {<CaixaIdioma />}
      </div>
    </div>
  );
};

export default CaixaMenu;
