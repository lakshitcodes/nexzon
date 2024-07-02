import "./App.css";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Checkout from "./Checkout.jsx";
import Login from "./Login.jsx";
import Payment from "./Payment.jsx";
import Orders from "./Orders.jsx";
import { useEffect, useState } from "react";
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SearchResults from "./SearchResults.jsx";
import Footer from "./Footer.jsx";
import AboutProject from "./AboutProject.jsx";

const promise = loadStripe(
  "pk_test_51PWcYDCUHs9kPndgSF9kbLeCLRSziMH0JoX37n3j46zLb6RKS45QW6iGlEDAzmk1q7BiTp4Ns1P26ppQVLSveFUi00XPhPg4sX"
);

function App() {
  const [{}, dispatch] = useStateValue();
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  // Function to mark checkout as complete
  const onCheckoutComplete = () => {
    setIsCheckoutComplete(true);
  };
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is  <<<", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout onCheckoutComplete={onCheckoutComplete} />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/search-results"
            element={
              <>
                <Header />
                <SearchResults />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              isCheckoutComplete ? (
                <>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                  <Footer />
                </>
              ) : (
                <Navigate to="/checkout" replace />
              )
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <AboutProject />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <h1>Not Found</h1>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
