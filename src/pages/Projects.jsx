import React, { Component } from 'react';
import ProjectCards from '../components/ProjectCards';
import Modal from '../components/Modal';

import { web, java, figma, purple, ft } from '../img/commission';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedCardData: null,
            selectedImgUrls: [],
        };
    }
    
    openModal = (cardData) => {
        let selectedImgUrls = [];
        if (cardData.id === "c1") {
            selectedImgUrls = [web.web1, web.web2, web.web3];
        } else if (cardData.id === "c2") {
            selectedImgUrls = [java.java1, java.java2, java.java3, java.java4, java.java5];
        }else if (cardData.id === "c3") {
            selectedImgUrls = [figma.stc1, figma.stc2, figma.stc3, figma.stc4, figma.stc5, figma.stc6, figma.stc7];
        }else if (cardData.id === "c4") {
            selectedImgUrls = [figma.p1, figma.p2, figma.p3, figma.p4, figma.p5];
        } else if (cardData.id === "c5") {
            selectedImgUrls = [ft.f1, ft.f2];
        } else if (cardData.id === "c6") {
            selectedImgUrls = [purple.pp1, purple.pp2];
        }
         else {
            // Set to an empty array if the ID doesn't match any known cases
            selectedImgUrls = [];
        }
        this.setState({ showModal: true, selectedCardData: cardData, selectedImgUrls });
    }
       

    closeModal = () => {
        this.setState({ showModal: false, selectedCardData: null });
    }

    render() {
        return (
            <div className='projects'>
                <div className='title'>Projects</div>
                
                <div className='cards'>
                    <ProjectCards 
                        title="Final project Flutter Chatbot" 
                        img={ft.f1}
                        onClick={() => this.openModal({ 
                            title: "Final project Flutter Chatbot",
                            text: "My 30% Progress final project Chatbot Application 'Healing Chatbot' Using Flutter and Dialogflow",
                            id: "c5", })} />

                    <ProjectCards 
                        title="Personal Website in 2021" 
                        img={purple.pp1}
                        onClick={() => this.openModal({ 
                            title: "Personal Website in 2021",
                            text: "My personal website Using HTML CSS JS for announcing that I accept student programming jobs.",
                            id: "c6" })} />

                    <ProjectCards 
                        title="Web Commissions" 
                        img={web.web1} 
                        onClick={() => this.openModal({
                            title: "Web Commissions", 
                            text: "Basic web hired by classmates and students in college. Using HTML, CSS, JS In 2021", 
                            id: "c1",
                        })} 
                    />
                    
                    <ProjectCards 
                        title="Java Commissions"
                        img={java.java1}
                        onClick={() => this.openModal({
                            title: "Java Commissions",
                            text: "Basic CRUD Java hired by classmates. Using Java and Mysql with phpMyAdmin In 2023",
                            id: "c2",
                        })}
                    />
                </div>

                <div className='subtopic'> Others </div>

                <div className='cards'>
                    <ProjectCards 
                        title="Personal idea website design on figma" 
                        img={figma.stc1}
                        onClick={() => this.openModal({ 
                            title: "Personal idea website design on figma",
                            text: "'StoryCreator' Inspired from character sheet that use to design charater for novel",
                            id: "c3",
                         })} />

                    <ProjectCards 
                        title="Personal portfolio website design on figma" 
                        img={figma.p1}
                        onClick={() => this.openModal({ 
                            title: "Personal portfolio website design on figma",
                            text: "Personal portfolio website design with my favorite color",
                            id: "c4",
                         })} />
                    
                </div>
                <Modal 
                    show={this.state.showModal} 
                    onClose={this.closeModal} 
                    data={this.state.selectedCardData} 
                    imgUrls={this.state.selectedImgUrls}
                />
            </div>
        );
    }
}

export default Projects;
