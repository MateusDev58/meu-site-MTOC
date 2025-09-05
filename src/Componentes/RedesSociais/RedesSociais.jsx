const RedesSociais = () => {
  return (
    <div className="caixa-redes-sociais-f">
      <div className="caixa-conteudo-redes-sociais">
        <h2 className="redes-sociais-h2">SIGA A GENTE NAS REDES SOCIAIS</h2>

        <p className="jure-lealdade-p">
          Jure lealdade à famiglia em nome de Mafia: The Old Country.
        </p>

        <div className="caixaredes">
          <a
            target="_blank"
            href="https://youtube.com/@mafiagame?sub_confirmation=1"
          >
            <img src="Youtube__1_.svg" alt="Youtube-img" />
          </a>

          <a target="_blank" href="https://www.instagram.com/mafiagame/">
            <img src="instagram.svg" alt="instagram-img" />
          </a>

          <a target="_blank" href="https://www.tiktok.com/@mafiagame">
            <img src="tiktok.svg" alt="tiktok-img" />
          </a>

          <a target="_blank" href="https://www.facebook.com/mafiagame">
            <img src="Facebook__1_.svg" alt="Facebook-img" />
          </a>

          <a
            target="_blank"
            href="https://x.com/intent/user?screen_name=mafiagame"
          >
            <img src="twitter.svg" alt="twitter-img" />
          </a>
        </div>

        <img
          className="img-vermelho-2"
          src="img-vermelho.png"
          alt="img vernelho"
        />
      </div>
    </div>
  );
};
export default RedesSociais;
