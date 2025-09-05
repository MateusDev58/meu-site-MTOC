import { useEffect } from "react";
import "./Footer.css";
import "./FooterResponsividade.css";

const Footer = () => {
  useEffect(() => {
    const root = document.querySelector(".caixa-conteudo-footer");
    if (!root) return;

    const mql = window.matchMedia("(max-width: 767px)");

    const onClick = (e) => {
      const btn = e.target.closest(".titulo-footer");
      if (!btn || !root.contains(btn)) return;

      const bloco = btn.closest(".caixa-links-footer");
      const lista = bloco?.querySelector(".caixa-lista-footer-ul");

      const aberto = bloco.classList.toggle("ativo");
      btn.setAttribute("aria-expanded", String(aberto));
      if (lista) lista.hidden = !aberto;
    };

    const enableMobile = () => {
      // inicia tudo fechado no mobile
      root
        .querySelectorAll(".caixa-links-footer")
        .forEach((b) => b.classList.remove("ativo"));
      root
        .querySelectorAll(".caixa-lista-footer-ul")
        .forEach((ul) => (ul.hidden = true));
      root
        .querySelectorAll(".titulo-footer")
        .forEach((btn) => btn.setAttribute("aria-expanded", "false"));
      root.addEventListener("click", onClick);
    };

    const disableMobile = () => {
      // remove o listener e deixa tudo aberto no desktop
      root.removeEventListener("click", onClick);
      root
        .querySelectorAll(".caixa-links-footer")
        .forEach((b) => b.classList.remove("ativo"));
      root
        .querySelectorAll(".caixa-lista-footer-ul")
        .forEach((ul) => (ul.hidden = false));
      root
        .querySelectorAll(".titulo-footer")
        .forEach((btn) => btn.setAttribute("aria-expanded", "true"));
    };

    // estado inicial
    if (mql.matches) enableMobile();
    else disableMobile();

    // alterna ao redimensionar
    const onChange = (e) => (e.matches ? enableMobile() : disableMobile());
    mql.addEventListener("change", onChange);

    return () => {
      root.removeEventListener("click", onClick);
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <div className="caixa-footer">
      <div className="caixa-logos">
        <div className="caixa-logos-imgs">
          <a target="_blank" href="https://2k.com/en-US/">
            <img
              className="logo-2k-footer"
              src="2K_Logo-footer.avif"
              alt="logo footer"
            />
          </a>

          <a target="_blank" href="https://hangar13games.com/">
            <img
              className="logo-hangar13"
              src="Hangar13_Logo.avif"
              alt="logo hangar 13"
            />
          </a>

          <a target="_blank" href="https://www.nvidia.com/en-us/geforce-now/">
            <img
              className="nvidia-img"
              src="nvidia-img.svg"
              alt="logo nvidia"
            />
          </a>
        </div>

        <div className="caixa-logos-rede-social">
          <a target="_blank" href="https://www.youtube.com/mafiagame">
            <img
              className="logos-rede-social"
              src="YouTube_Logo.svg"
              alt="YouTube Logo"
            />
          </a>

          <a target="_blank" href="https://www.instagram.com/mafiagame/">
            <img
              className="logos-rede-social"
              src="Instagram_Logo.svg"
              alt="Instagram Logo"
            />
          </a>

          <a target="_blank" href="https://www.tiktok.com/@mafiagame">
            <img
              className="logos-rede-social"
              src="TikTok_Logo.svg"
              alt="TikTok Logo"
            />
          </a>

          <a target="_blank" href="https://www.facebook.com/mafiagame">
            <img
              className="logos-rede-social"
              src="Facebook_Logo.svg"
              alt="Facebook  Logo"
            />
          </a>

          <a target="_blank" href="https://x.com/mafiagame">
            <img
              className="logos-rede-social"
              src="twitter-logo.svg"
              alt="twitter logo"
            />
          </a>
        </div>
      </div>

      <div className="caixa-conteudo-footer">
        <div className="caixa-links-footer">
          <button className="titulo-footer" aria-expanded="false">
            ABOUT{" "}
            <span>
              <svg
                className="seta"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  className="bc-collapsible-section-icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 5.83989L1.66011 0L0 1.66011L7.47051 9.13062L7.5 9.10112L7.5295 9.13062L15 1.66011L13.3399 0L7.5 5.83989Z"
                />
              </svg>
            </span>{" "}
          </button>

          <ul className="caixa-lista-footer-ul" hidden>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://2k.com/"
              >
                2K.COM
              </a>
            </li>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://store.2k.com/pt-BR"
              >
                LOJA 2K
              </a>
            </li>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://support.2k.com/hc/pt-br"
              >
                SUPORTE 2K
              </a>
            </li>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://portal.2k.com/pt/2k/signin?client_id=506fb5c28b2945feb4008d7973a30f3a&lang=pt&redirect_uri=https%3A%2F%2Fportal.2k.com%2F&state=859d0d90-675a-420e-87bf-919260756f6f"
              >
                ENTRAR NA CONTA 2K
              </a>
            </li>
          </ul>
        </div>

        {/* lista 2 */}
        <div className="caixa-links-footer">
          <button className="titulo-footer" aria-expanded="false">
            LEGAL{" "}
            <span>
              <svg
                className="seta"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  className="bc-collapsible-section-icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 5.83989L1.66011 0L0 1.66011L7.47051 9.13062L7.5 9.10112L7.5295 9.13062L15 1.66011L13.3399 0L7.5 5.83989Z"
                />
              </svg>
            </span>{" "}
          </button>

          <ul className="caixa-lista-footer-ul" hidden>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://www.take2games.com/privacy/pt-BR/"
              >
                POLÍTICA DE PRIVACIDADE
              </a>
            </li>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://www.take2games.com/legal/pt-BR/"
              >
                TERMOS DE SERVIÇO
              </a>
            </li>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://www.take2games.com/cookiepolicy/pt-BR/"
              >
                POLÍTICA DE COOKIES
              </a>
            </li>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://2k.com/ad-partners/pt/"
              >
                PARCEIROS PUBLICITÁRIOS 2K
              </a>
            </li>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://www.take2games.com/ccpa/pt-BR/"
              >
                NÃO VENDER NEM COMPARTILHAR <br /> AS MINHAS INFORMAÇÕES
                PESSOAIS
              </a>
            </li>
          </ul>
        </div>

        {/* lista 3 */}
        <div className="caixa-links-footer">
          <button className="titulo-footer" aria-expanded="false">
            Games{" "}
            <span>
              <svg
                fill="currentColor"
                className="seta"
                viewBox="0 0 15 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="bc-collapsible-section-icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 5.83989L1.66011 0L0 1.66011L7.47051 9.13062L7.5 9.10112L7.5295 9.13062L15 1.66011L13.3399 0L7.5 5.83989Z"
                />
              </svg>
            </span>{" "}
          </button>

          <ul className="caixa-lista-footer-ul" hidden>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://mafia.2k.com/pt-BR/mafia/"
              >
                MAFIA
              </a>
            </li>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://mafia.2k.com/pt-BR/mafia-2/"
              >
                MAFIA II
              </a>
            </li>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://mafia.2k.com/pt-BR/mafia-3/"
              >
                MAFIA III
              </a>
            </li>
            <li className="lista-footer-li">
              <a
                className="lista-footer-a"
                target="_blank"
                href="https://mafia.2k.com/pt-BR/"
              >
                FRANQUIA
              </a>
            </li>
          </ul>
        </div>

        <div className="caixa-verifique">
          <a href="https://www.esrb.org/">
            <img
              className="verifique"
              src="Verifique_A_Classificacao_Indicativa-img.avif"
              alt="Verifique A Classificacao Indicativa img"
            />
          </a>
        </div>
      </div>

      <div>
        <div className="linha-footer"></div>
        <p className="texto-footer">
          ©2025 Take-Two Interactive Software, Inc. Publicado por 2K Games.
          Desenvolvido por Hangar 13. Mafia, Take-Two Interactive Software, 2K,
          Hangar 13 e seus logotipos são marcas comerciais da Take-Two
          Interactive Software, Inc. Todas as outras marcas registradas e
          comerciais são de propriedade de seus detentores. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
