import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Routes, Outlet, Route } from 'react-router';
import ProdutoForm from './ProdutoForm';
import Produtos from './Produtos';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/form" element={<ProdutoForm/>} />
        <Route path="/form/:id" element={<ProdutoForm />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
