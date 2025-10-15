import "./App.css";

import Navbar from "./components/layout/Navbar.jsx";      
import ContactPage from "./pages/ContactPage.jsx";  
import Footer from "./components/Footer.jsx";      
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer.jsx";
import FooterWhite from "./components/Footer_white.jsx";
import Navbar from "./components/layout/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
     // <ContactPage />
      <Footer />
      <HomePage />
    </div>
  );
}

export default App;
