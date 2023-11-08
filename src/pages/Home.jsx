import React, { Component } from 'react'
import profilepic from '../img/me.png'
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
    render() {
        return(
            <div className='home'>
                <div className='frame'>
                <img src={profilepic} alt="profile" className='profilepic'/>
                </div>
                <ReactTypingEffect 
                text={['Hi! I am hanuera', 'Hi! I am a hana']} 
                speed={40} 
                eraseDelay={2000} 
                className='title'></ReactTypingEffect>
                <div className='p'>Sometimes i was hired by friends from college or students from another college for programming project/miniproject and website tasks. I'm happy working these jobs. Sometimes I might get stuck for a while. But it's always fun when I can solve it!</div>
            </div>
        );
    }
}

export default Home;