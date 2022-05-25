import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainNavbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AlRoutes from "./AlRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <AlRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
