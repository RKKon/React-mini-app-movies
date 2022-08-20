import { Component } from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainContent from "../mainContent/MainContent";

import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
