import "./App.css";
import Footer from "./components/Footer.jsx"; 
import FooterWhite from "./components/Footer_white.jsx";

function App() {
  return (
    <div className="m-0 p-0">
      
      {/* Konten halaman lainnya bisa di sini */}

      {/* Menampilkan footer gelap */}
      <Footer />

      {/* Menampilkan footer putih */}
      <FooterWhite />

    </div>
  );
}

export default App;