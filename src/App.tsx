import { h } from 'preact';
import { Route, Router } from 'preact-router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <div>
    <Navbar />
    <main>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Router>
    </main>
    <Footer />
  </div>
);

export default App;