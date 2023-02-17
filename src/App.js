import Header from './components/header/Header'
import Home from './pages/Home'
import Store from './pages/Store'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/main.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Store />} />
        
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
