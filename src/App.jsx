// Cabeçalho
import Cabeçalho from "./Componentes/Cabeçalho/Cabeçalho";

// Sessão Reserve agora
import ReserveMafia from "./Componentes/ReserveAgora/ReserveMafia";

// Sessão Carrossel Infinito
import CarrosselInfinito from "./Componentes/Carrossel-Infinito/CarrosselInfinito";

// Sessão Trailer de Lançamento
import TrailerLançamento from "./Componentes/TrailerLançamento/TrailerLançamento";

import DeluxeEdition from "./Componentes/DeluxeEdition/DeluxeEdition";

// Sessão Crime Organizado
import CrimeOrganizado from "./Componentes/CrimeOrganizado/CrimeOrganizado";

// Sessão Joga Um Filme Clássico Da Máfia
import ClassicoMafia from "./Componentes/ClassicoMafia/ClassicoMafia";

// Sessão Lute Pela Sobrevivência
import Sobrevivencia from "./Componentes/Sobrevivencia/Sobrevivencia";

// Sessão Viaja De Forma Autêntica
import Viaja from "./Componentes/Viaja/Viaja";

// Sessão  Siga A Gente Nas Redes Sociais
import RedesSociais from "./Componentes/RedesSociais/RedesSociais";

// Sessão Benefícios da Conta 2K
import Conta2K from "./Componentes/Conta2K/Conta";

// Sessão Media
import Media from "./Componentes/Media/Media";

// Sessão Youtube
import Youtube from "./Componentes/Youtube/Youtube";

// Sessão Notícias
import Noticias from "./Componentes/Noticias/Noticias";

// Footer
import Footer from "./Componentes/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <nav>
          <Cabeçalho />
        </nav>
      </header>

      <main>
        <section>
          <ReserveMafia />
        </section>

        <section>
          <CarrosselInfinito />
        </section>

        <section>
          <TrailerLançamento />
        </section>

        <section>
          <DeluxeEdition />
        </section>

        <section>
          <CrimeOrganizado />
        </section>

        <section>
          <ClassicoMafia />
        </section>

        <section>
          <Sobrevivencia />
        </section>

        <section>
          <Viaja />
        </section>

        <section>
          <RedesSociais />
        </section>

        <section>
          <Conta2K />
        </section>

        <section>
          <Media />
        </section>

        <section>
          <Youtube />
        </section>

        <section>
          <Noticias />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
