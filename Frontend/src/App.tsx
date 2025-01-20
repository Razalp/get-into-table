import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from './contexts/ThemeContext'
import "./App.css"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import ErrorPage from "./pages/404/ErrorPage"
import Table from "./pages/Table/Table"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Table />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

