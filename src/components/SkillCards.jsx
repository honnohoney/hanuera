import React, { Component } from "react";

class SkillCards extends Component {
    render() {
        return(
            <div className="skill-card">
                <div className="skill-pic-frame">
                    <img src={this.props.img} />
                </div>
                <div style={{height: '20%'}}>
                    <div style={{fontWeight: 'bold'}}>{this.props.txt}</div>
                   
                </div>
            </div>
        )
    }
}
export default SkillCards;