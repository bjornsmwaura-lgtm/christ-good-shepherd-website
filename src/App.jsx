import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';


function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<h1 style={{ padding: '4rem', textAlign: 'center' }}>Admissions Page</h1>} />
            <Route path="/gallery" element={<h1 style={{ padding: '4rem', textAlign: 'center' }}>Gallery Page</h1>} />
            <Route path="/contact" element={<h1 style={{ padding: '4rem', textAlign: 'center' }}>Contact Page</h1>} />
            <Route path="/donate" element={<h1 style={{ padding: '4rem', textAlign: 'center' }}>Donate Page</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;