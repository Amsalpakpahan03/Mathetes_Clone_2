import "./App.css";

// Sesuaikan path impor dengan struktur folder Anda
import Navbar from "./components/layout/Navbar.jsx";      // Path ini sudah benar
import ContactPage from "./pages/ContactPage.jsx";   // 👈 PERBAIKAN DI SINI
import Footer from "./components/Footer.jsx";      // Path ini sudah benar

function App() {
  return (
    <div>
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;