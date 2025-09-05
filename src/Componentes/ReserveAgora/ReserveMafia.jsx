import "./ReserveMafia.css";
import "./ResponsividaReserva.css";

const ReserveMafia = () => {
  return (
    <div className="caixa-pai">
      <div className="caixa-conteudo imagem-de-fundo-mafia">
        <div className="caixa-logo-reserva">
          <img
            className="logo-mafia-2"
            src="Logo-2.avif"
            alt="Logo do Mafia The Old Country"
          />
          <a
            className="reserve-agora botao--reserve"
            href="https://mafia.2k.com/pt-BR/the-old-country/buy/"
          >
            COMPRE AGORA
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReserveMafia;
