import './App.css';
import { Component } from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ReactGA from 'react-ga4';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import Privacy from './Pages/Privacy';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Connascence from './Connascence/Connascence';
import ConnascenceOfName from './Connascence/ConnascenceOfName';

class App extends Component {
  useEffect() {
    ReactGA.send(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about/privacy" element={<Privacy />} />
            <Route path="/connascence" element={<Connascence />} />
            <Route path="/connascence/connascence-of-name" element={<ConnascenceOfName />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
