import "./App.css";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
