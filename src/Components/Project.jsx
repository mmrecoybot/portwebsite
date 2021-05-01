import React, { useEffect } from 'react'
import ProjectData from './ProjectData'
import Title from './Title'
import Footer from './Footer'
import GitHubIcon from '@material-ui/icons/GitHub'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = ' Mustafizur - Projects '
  }, [])
  const SingleProject = (prop) => {
    return (
      <>
        <div data-aos-duration="600" data-aos={prop.animate} id="SingleProject">
          <img src={prop.src} alt="Error" />
          <div id="ProjectDesc">
            <h2> {prop.title} </h2>
            <p> {prop.desc} </p>
            <a href={prop.LiveLink} target="_blank" rel="noopener noreferrer">
              <FolderOpenIcon
                style={{ fontSize: ' 2.5rem ', margin: '15px 0px' }}
              />
            </a>
            <a href={prop.GithubLink} target="_blank" rel="noopener noreferrer">
              <GitHubIcon
                style={{ fontSize: ' 2.5rem ', margin: '10px 0px' }}
              />
            </a>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <section id="Projects">
        <Title
          title="My Projects"
          desc="Here are all the projects which I have completed."
        />
        <div id="ProjectContentWrapper">
          {ProjectData.map((data, index) => {
            return (
              <SingleProject
                key={index}
                title={data.title}
                desc={data.desc}
                LiveLink ={data.LiveLink}
                GithubLink={data.GithubLink}
                src={data.src}
                animate={data.animate}
              />
            )
          })}
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Project
