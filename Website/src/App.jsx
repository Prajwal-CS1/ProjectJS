import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts';
import Home from './pages/Home';
import Planets from './pages/Planets';
import About from './pages/About';
import Nebula from './pages/Nebula';
import Contact from './pages/Contact'; 
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  {/* This handles the root URL */}
          <Route path="home" element={<Home />} />  {/* Add this for /home */}
          <Route path="planets" element={<Planets />} />
          <Route path="about" element={<About />} />
          <Route path="nebulas" element={<Nebula />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}