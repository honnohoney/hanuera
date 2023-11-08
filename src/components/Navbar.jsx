import React, { Component } from "react";
import NavItems from './NavItems';
import Hamburger from "./Hamburger";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': '',
            'hamburgerOpen': false 
        }
    }

    toggleHamburger = () => { 
        this.setState({ hamburgerOpen: !this.state.hamburgerOpen });
    }

    activeitem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            const activeElement = document.getElementById(this.state.NavItemActive);
            if (activeElement) {
                activeElement.classList.remove('active');
            }
        }
        this.setState({ 'NavItemActive': item }, () => {
            const newActiveElement = document.getElementById(this.state.NavItemActive);
            if (newActiveElement) {
                newActiveElement.classList.add('active');
            }
        });
    }

    render() {
        const { hamburgerOpen } = this.state; // Destructure the state

        return (
            <nav>
                <a href="/"> <span>Hanuera</span> </a>
                <ul className={hamburgerOpen ? 'visible' : 'hidden'} onClick={this.toggleHamburger}>
                    <NavItems item="Projects" tolink='/projects' activeNav={this.activeitem}></NavItems>
                    <NavItems item="Skills" tolink='/skills' activeNav={this.activeitem}></NavItems>
                    <NavItems item="Contact" tolink="/contact" activeNav={this.activeitem}></NavItems>
                    <NavItems item="AboutMe" tolink="/about" activeNav={this.activeitem}></NavItems>
                </ul>
                <div className="hamburger" onClick={this.toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </div>
            </nav>
        );
    }
}

export default Navbar;
