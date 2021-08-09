import "bootstrap/dist/css/bootstrap.min.css";
import "./css/global.css";
import Footer from "./components/footers/Footer";
import Navigation from "./components/Navs/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation modalId="mainForm" modalBtn="#mainForm" />
      <Footer />
    </div>
  );
}

export default App;
