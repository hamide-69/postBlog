import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import CallPost from "./Components/CallPost";
import SubmitPost from "./Components/SubmitPost";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className="container-fluid main">
      <header className="container-fluid bg-sec-header">
        <img className="logo-img" src={logo}></img>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
        </ul>
      </header>
      <section className="row content-sec  ">
        <SubmitPost />

        <CallPost />
      </section>
    </div>
  );
}

export default App;
