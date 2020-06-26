import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

import {
  LandingPage,
  About,
  Contacts,
  Learn,
  Projects,
  Skills,
} from "./pages/Auth";

import { AuthRoute, PublicRoute } from "./components/routes";
import { setupHttpConfig } from "./utils/http";

function App() {
  useEffect(() => {
    setupHttpConfig();
  }, []);

  return (
    <div className="app-container">
      <ToastContainer autoClose={3000} />
      <Provider store={store}>
        <Router>
          <PublicRoute path="/" exact component={LandingPage} />
          <AuthRoute path="/about" exact component={About} />
          <AuthRoute path="/contacts" exact component={Contacts} />
          <AuthRoute path="/learn" exact component={Learn} />
          <AuthRoute path="/projects" exact component={Projects} />
          <AuthRoute path="/skills" exact component={Skills} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
