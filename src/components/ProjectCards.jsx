import React, { Component } from "react";

class ProjectCards extends Component {
    render() {
        return(
            <div className="card" onClick={this.props.onClick}>
                <img src={this.props.img} className="projectpic" />
                <div className="pjName">
                    {this.props.title}
                </div>
            </div>
        )
    }
}
export default ProjectCards;