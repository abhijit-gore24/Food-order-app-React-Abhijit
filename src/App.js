import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import DataPage from "./components/DataPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} /> {/* Home page */}
          <Route path="/data" element={<DataPage />} /> {/* Data page */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
