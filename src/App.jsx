import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer.jsx";
import FooterWhite from "./components/Footer_white.jsx";
import Navbar from "./components/layout/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
