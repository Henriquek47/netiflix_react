import { Routes, Route } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';

import Inicio from './pages/Inicio';
import Series from './pages/Series';
import Filmes from './pages/Filmes';
import MinhaLista from './pages/MinhaLista';


function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/series" element={<Series />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/minha-lista" element={<MinhaLista />} />
      </Routes>
    </div>
  );
}

export default App;
