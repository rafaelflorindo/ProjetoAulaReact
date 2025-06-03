import './App.css';

import Card from './Components/Card';

function App() {
  const biografia = "Professor de Tecnologia ...";
  return (
    <div>
      <header>
        <Card 
          fotoPerfil="fotoPerfil.jpeg"
          nome = "Rafael A. Florindo" 
          biografia = {biografia}
        />
      </header>
      <main>
        <section>
          <h1>Projetos</h1>
        </section>
      </main>
      <footer>
        <p>Desenvolvido por: Rafael Florindo - 2025</p>
      </footer>
    </div>
  );
}

export default App;
