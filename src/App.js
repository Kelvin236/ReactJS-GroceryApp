import React, { Component } from 'react';
import Header from './components/header_component/header';
import Footer from './components/footer_components/footer';
import Mainpage from './components/pages/mainPage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* calls the Header component and prints the content print to page*/}
        <Header /> 
          <Mainpage />
        <Footer />
      </div>
    );
  }
}

export default App;
