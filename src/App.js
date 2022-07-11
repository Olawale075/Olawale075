import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "./About";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { Layout } from "./components/Layout";
import { Cards } from "./components/Cards";
import { Card } from "react-bootstrap";
import NotAvailable from "./components/NotAvailable";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <Cards/>
        <Layout>
          <Router>
            <div className="container">
              <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/notAvailable" component={NotAvailable}></Route>
                <Route path="/nomatch" component={NoMatch}></Route>
              </Switch>
            </div>
          </Router>
        </Layout>{" "}
        <FooterComponent />
      </React.Fragment>
    );
  }
}
export default App;
