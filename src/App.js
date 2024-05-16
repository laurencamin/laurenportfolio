import './App.css';
import Header from './components/Header';
import Home from './pages/Welcome';
import About from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
