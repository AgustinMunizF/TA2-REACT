import React from 'react';
import './App.css';

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

const Content = () => (
  <header className="App-header">
    <Card>
      <h2>Primera Card</h2>
      <p>Este es la primera Card.</p>
      <p>Persona Asignada: Jose</p>
      <p>Fecha Inicio: 2024-09-10</p>
      <p>Fecha Fin: 2024-09-20</p>
    </Card>

    <Card>
      <h2>Segunda Card</h2>
      <p>Este es la segunda Card.</p>
      <p>Persona Asignada: Pepe</p>
      <p>Fecha Inicio: 2024-09-15</p>
      <p>Fecha Fin: 2024-09-25</p>
    </Card>

    <Card>
      <h2>Tercera Card</h2>
      <p>Este es la tercera Card.</p>
      <p>Persona Asignada: Agustin</p>
      <p>Fecha Inicio: 2024-09-20</p>
      <p>Fecha Fin: 2024-09-30</p>
    </Card>
  </header>
);

function App() {
  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;
