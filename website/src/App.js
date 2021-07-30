import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/global.css"
import Nav from "./components/Navs/Nav";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div>
     
      <Nav/>
      <br></br><br></br>
     <div className="container">
      <Banner/>
     </div>

    </div>


  );
}

export default App;
