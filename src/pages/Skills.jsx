import React, { Component } from 'react';
import SkillCards from '../components/SkillCards';
import { skills } from '../img/commission';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.skillList = [
            { img: skills.html, txt: 'HTML' },
            { img: skills.css, txt: 'CSS' },
            { img: skills.js, txt: 'JS' },
            { img: skills.php, txt: 'PHP' },
            { img: skills.mysql, txt: 'MySQL' },
            { img: skills.react, txt: 'React.js' },
            { img: skills.vue, txt: 'Vue.js' },
            { img: skills.vite, txt: 'Vite.js' },
            { img: skills.flutter, txt: 'Flutter' },
            { img: skills.Java, txt: 'Java' },
            { img: skills.bootstrap, txt: 'Bootstrap' },
            { img: skills.dj, txt: 'Django' },
        ];
    }

    render() {
        return (
            <div className="skills">
                <div className="title">Skills</div>
                <div className="p">Skills that have been used in projects</div>
                <div className="skills-container">
                    {this.skillList.map((skill, index) => (
                        <SkillCards key={index} img={skill.img} txt={skill.txt} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Skills;
