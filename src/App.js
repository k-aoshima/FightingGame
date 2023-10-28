import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header/>
        <Routes >
          <Route exact path="/" Component={Home} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
