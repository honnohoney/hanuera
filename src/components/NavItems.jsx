import React, {Component} from "react";
import { Link } from "react-router-dom";

class NavItems extends Component {
    render() {
        // const tolink = this.props.item === "Home"?"/" : `/${this.props.item}`;
        return(
            <li id={this.props.item}>
                <Link to={this.props.tolink} onClick={this.props.activeNav.bind(this, this.props.item)}>{this.props.item}</Link>
            </li>
        );
    }
}

export default NavItems;
    