import "./HamburguerMenu.css";

const HamburguerMenu = ({ onClick }) => {
  return (
    <div className="caixa-botao">
      <button
        className="botao-hamburguer"
        onClick={onClick}
        aria-label="Abrir menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icone-hamburguer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default HamburguerMenu;
