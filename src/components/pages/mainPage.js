import React, { Component } from 'react';

class Mainpage extends Component {
  render() {
    return (
        <div>
          <div className="container-fluid home">
              <h1 className="nameSetting">Company's name here</h1>
          </div>

          <div id="about">
            <h1 className="aboutSetting">Who We Are</h1>

          </div>
        </div>
    );
  }
}

export default Mainpage;
