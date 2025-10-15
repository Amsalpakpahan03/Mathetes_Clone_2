import "./App.css";

import Navbar from "./components/layout/Navbar.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage";
// import FooterWhite from "./components/Footer_white.jsx";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ContactPage /> */}
      <HomePage />

      <Footer />
    </div>
  );
}

export default App;
