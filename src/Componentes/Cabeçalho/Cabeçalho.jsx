import { useState } from "react";
import "./Cabeçalho.css";
import "./Responsividade.css";
import HamburguerMenu from "./HamburguerMenu.jsx";
import CaixaMenu from "./CaixaMenu.jsx";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="cabeçalho">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mafia.2k.com/the-old-country/"
        >
          <img
            className="logo-mafia-img"
            src="Mafia-logo.avif"
            alt="Logo do Mafia"
          />
        </a>

        <nav className="caixa-links">
          <ul>
            <li>
              <a
                className="links-jogos"
                target="_blank"
                rel="noopener noreferrer"
                href="https://mafia.2k.com/mafia/"
              >
                MAFIA
              </a>
            </li>

            <li>
              <a
                className="links-jogos"
                target="_blank"
                rel="noopener noreferrer"
                href="https://mafia.2k.com/mafia-2/"
              >
                MAFIA <span className="numero-vermelho">II</span>
              </a>
            </li>

            <li>
              <a
                className="links-jogos"
                target="_blank"
                rel="noopener noreferrer"
                href="https://mafia.2k.com/mafia-3/"
              >
                MAFIA <span className="numero-vermelho">III</span>
              </a>
            </li>

            <li>
              <a
                className="reserve-agora"
                target="_blank"
                rel="noopener noreferrer"
                href="https://mafia.2k.com/pt-BR/the-old-country/buy/"
              >
                COMPRE AGORA
              </a>
            </li>

            <li>
              <HamburguerMenu onClick={() => setMenuAberto(!menuAberto)} />
            </li>
          </ul>
        </nav>
      </header>

      {menuAberto && <CaixaMenu />}
    </>
  );
};

export default Cabecalho;
