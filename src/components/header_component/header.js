import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Header extends Component {
    constructor(props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    scrollToWithContainer() {
        let goToContainer = new Promise ((resolve, reject) => {

            Events.scrollEvents.register('end', () => {
                resolve();
                Events.scrollEvents.remove('end');
            });

            scroller.ScrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        });

        goToContainer.then(() => 
          scroller.scrollTo('scroll-container-second-element', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
              containerId: 'scroll-container'
          }));
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }


   render() {
     return (
         <header>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                 <Navbar.Brand href="#home">Website Name</Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="mr-auto">
                         <Nav.Link><Link activeClass="active" className="aboutus" to="aboutus" spy={true} smooth={true} duration={500}>About Us</Link></Nav.Link>
                         <Nav.Link><Link activeClass="active" className="services" to="services" spy={true} smooth={true} duration={500}>Services</Link></Nav.Link>
                         <Nav.Link href="#contact">Contact</Nav.Link>
                     </Nav>

                     <Nav>
                         <Nav.Link href="#login">Login</Nav.Link>
                         <Nav.Link href="#signup">Sign Up</Nav.Link>
                     </Nav>
                 </Navbar.Collapse>
             </Navbar>
         </header>
    );
   }
}

export default Header;
