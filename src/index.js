import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import "./styles.css";

const App = () => (
  <div>
    <h1>Reach router Practice</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="dashboard">Dashboard</Link>{" "}
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
    <Router>
      <Home path="/" message="hi this is the Home Page" />
      <Dashboard path="dashboard" />
      <About path="about" />
    </Router>
  </div>
);

const Home = ({ path, message }) => (
  <div>
    <h2>
      {message} {path}
    </h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
