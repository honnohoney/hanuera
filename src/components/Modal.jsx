import React, { Component } from "react";
import Slideshow from "./SlideShow";

class Modal extends Component {
    handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        const { show, onClose, data, imgUrls } = this.props;
        if (!show) {
            return null;
        }

        return (
            <div className="modal" onClick={this.handleOverlayClick}>
                <div className="modal-content">
                    <button onClick={onClose}>&#10006;</button>
                    <Slideshow images={imgUrls} /> {/* This is your Slideshow component */}
                    <div className="modal-txt">
                        <div className="title-modal">{data.title}</div>
                        <p>{data.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;