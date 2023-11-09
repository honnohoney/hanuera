import React, { useState } from 'react';
import me from '../img/aboutMe.png';
import ResumePDF from '../resume/Resume_Hanuera.pdf';
import ResumeJPG from '../resume/Resume_Hanuera.jpg';

const About = () => {
    const [showModal, setShowModal] = useState(false);

    const handleView = () => {
        window.open(ResumeJPG, '_blank');
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = ResumePDF;
        link.download = 'Resume_Hanuera.pdf';
        link.click();
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='about'>
            <div className='title'>About Me</div>
            <div className='describe'>When we are working together, you may know me better.</div>
            <div className='resume-btn'>
                <button onClick={handleView}>
                    View my resume
                    <span className="material-symbols-outlined">visibility</span>
                </button>
                <button onClick={handleDownload}>
                    Download(PDF)
                    <span className="material-symbols-outlined">download</span>
                </button>
            </div>
            <div className='abframe'>
                <img src={me} alt="profile" className='aboutpic' />
            </div>
            {showModal && (
                <div className='modal' onClick={handleCloseModal}>
                    <div className='modal-content'>
                        <img src={ResumeJPG} alt='resume' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
