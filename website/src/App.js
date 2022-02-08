import "bootstrap/dist/css/bootstrap.min.css";
import "./css/global.css";
import Footer from "./components/footers/Footer";
import Nav from "./components/Navs/Nav";
import Main from "./pages/Main";

function App() {
  return (
    <div className="container">
     <Nav modalId ="mainForm" modalBtn="#mainForm"/>
     <Footer/>
    </div>
  );
}

export default App;
