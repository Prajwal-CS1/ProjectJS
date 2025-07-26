import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layouts'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}