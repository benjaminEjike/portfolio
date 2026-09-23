import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
  return (
    <section id = 'skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate Computer science student with experience in Software development and Data Science</span>
        <div className="skillsBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                        <p>This is a Demo text, i will write something here</p>
                </div>
            </div>
        <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                        <p>Write something here</p>
                </div>
            </div>
        <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                        <p>Write something here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills