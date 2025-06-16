import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import CalcularDesconto from './Components/CalcularDesconto';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <main>
          <section>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/calcularDesconto' 
              element={<CalcularDesconto valorCompra="1500" porcentagem="10" pagamento ="1"/>} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>Desenvolvido por: Rafael Florindo - 2025</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;