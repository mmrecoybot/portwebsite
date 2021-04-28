import React from 'react'
import { Link } from 'react-router-dom'
import AboutSrc from './img/About.png'

const ShortAbout = () => {
  const year = new Date().getFullYear()
  const myExperience = year - 2021
  return (
    <>
      <section id="About">
        <div id="Container">
          <div id="AboutCOntentWrapper">
            <div id="AboutDesc" data-aos="fade-up">
              <h2>Few Words About Me</h2>
              <p>
                Hi there, Hope you are doing well. I am Md Mustafizur Rahman. I am aJunior Full Stack
                web developer. I love developing web applications. I
                have more than {myExperience} years of experinece as a web
                developer. I have Designed and Developed many website.
              </p>
              <p>
                I love coding soo much and I take it as a passion. And I really
                love my passion. I have never felt frustrated or boring when I
                am coding. Coding makes me happy. I love to learn new things and
                I always try to keep my skills updated. My favourite language is
                Javascript.
              </p>
              <Link to="/about">Read More</Link>
            </div>
            <div id="AboutImage" data-aos="fade-down">
              <img src={AboutSrc} alt="Error" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ShortAbout