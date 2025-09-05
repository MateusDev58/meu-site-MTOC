import React, { useState } from "react";
import "./CaixaIdioma.css";

const CaixaIdioma = () => {
  const [aberto, setAberto] = useState(false);

  const toggleDropdown = () => {
    setAberto(!aberto);
  };

  return (
    <div className="caixa-idioma">
      <button className="botao-idioma" onClick={toggleDropdown}>
        PORTUGUÊS (BR)
        <span>
          <svg
            className="seta"
            width="15"
            height="10"
            viewBox="0 0 15 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 5.83989L1.66011 0L0 1.66011L7.47051 9.13062L7.5 9.10112L7.5295 9.13062L15 1.66011L13.3399 0L7.5 5.83989Z"
            />
          </svg>
        </span>
      </button>

      {aberto && (
        <ul className="lista-idioma">
          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/the-old-country/"
            >
              ENGLISH
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/en-GB/the-old-country/"
            >
              FRANÇAIS
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/fr-FR/the-old-country/"
            >
              ITALIANO
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/de-DE/the-old-country/"
            >
              DEUTSCH
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/pl-PL/the-old-country/"
            >
              POLSKI
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/cs-CZ/the-old-country/"
            >
              ČEŠTINA
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/ru-RU/the-old-country/"
            >
              РУССКИЙ
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/es-ES/the-old-country/"
            >
              ESPAÑOL (EU)
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/es-MX/the-old-country/"
            >
              ESPAÑOL (MX)
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/ko-KR/the-old-country/"
            >
              한국어
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/ja-JP/the-old-country/"
            >
              日本語
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/zh-TW/the-old-country/"
            >
              繁體中文
            </a>
          </li>

          <li className="lista-idioma">
            <a
              className="idioma"
              target="_blank"
              href="https://mafia.2k.com/zh-CN/the-old-country/"
            >
              简体中文
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CaixaIdioma;
