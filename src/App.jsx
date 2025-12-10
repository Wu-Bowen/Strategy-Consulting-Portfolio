import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ZebraCaseStudy from './pages/ZebraCaseStudy';
import KPMGCaseStudy from './pages/KPMGCaseStudy';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/zebra-case-study" element={<ZebraCaseStudy />} />
          <Route path="/kpmg-case-study" element={<KPMGCaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
