import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
