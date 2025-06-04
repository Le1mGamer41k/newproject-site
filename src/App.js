import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import HowItWorks from "./pages/HowItWorks"
import Checkout from "./pages/Checkout"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import "./styles/styles.css"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/checkout" 
                element={
                  <ProtectedRoute showLoginPrompt={true}>
                    <Checkout />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
