import React from 'react'
import pic from '../images/project.svg'

const Projects = () => (
  <div className='projects' id='projects'>
    <div className='empty'></div>
    <div className='project_title'>PROJECTS</div>
    <center><div className='highlight2'></div></center>
    <div className='project_container'>
      <div className='project_content'>
        <p>
          I like doing research about different technologies and domains, trying to find problems and coming up with viable
          solutions. Hence, working on projects is something I'm always up for. Exploring different tech-stacks, or different
          problem areas ensures a ton of learning experience. 
          <br></br><br></br>You can view, download and use projects hosted on my Github account.<br></br><br></br><br></br>
          <center><a href='https://github.com/Maverick100199?tab=repositories' target='_blank'>View Projects</a></center>
        </p>
      </div>
      <div className='project_pic'><img src={ pic }></img></div>
    </div>
  </div>
)

export default Projects
