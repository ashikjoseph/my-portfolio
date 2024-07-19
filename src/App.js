import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
