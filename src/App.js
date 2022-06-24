import AboutSection from './components/AboutSection';
import Header from './components/Header'
import './App.css';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import WinFormsAppPage from './pages/WinFormsAppPage/WinFormsAppPage';
import ASPNetCoreAPIPage from './pages/ASPNetCoreAPIPage/ASPNetCoreAPIPage'
import LinearRegressionAppPage from './pages/LinearRegressionAppPage/LinearRegressionAppPage';
function App() {
  return (
    <div className="app">
        <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/windows-forms-app" element={<WinFormsAppPage />} />
        <Route path="/windows-forms-app-api" element={<ASPNetCoreAPIPage />} />
        <Route path="/linear-regression-app" element={<LinearRegressionAppPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
