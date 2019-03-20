import React, { Component } from 'react';
import { Element } from 'react-scroll';

class Mainpage extends Component {
  render() {
    return (
        <div>
          <div className="container-fluid home">
              <Element className="nameSetting">Company's name here</Element>
          </div>

          <div id="about">
            <Element name="aboutus" className="aboutSetting">Who We Are</Element>

          </div>
        </div>
    );
  }
}

export default Mainpage;
