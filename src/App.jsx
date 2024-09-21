import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import RegisForm from './components/RegisForm/RegisForm';
import Beranda from './components/Beranda/Beranda';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisForm />} />
          <Route path="/beranda" element={<Beranda />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
