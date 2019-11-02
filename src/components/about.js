import React from 'react'
import dp from '../images/dp.jpeg'

const About = () => (
  <div className='about' id='about'>
    <div className='empty'></div>
    <div className='about_title'>ABOUT</div>
    <center><div className='highlight2'></div></center>
    <div className='about_container'>  
      <div className='about_pic'><img src={ dp } /></div>
      <div className='about_content'>
        <p>
          I am a third year undergraduate pursuing a major in Computer Engineering, at National Institute of Technology, Surat.
          Here, I also am a Designer at ACM(Association of Computing Machinery) NIT-Surat.
          <br></br>I began with Web Development and am profoundly intrigued by the possibilites of Artificial Intelligence,
          Machine Learning and Deep Learning. Mathematics, for me, is a constant source of fascination like art. I love solving
          real problems with or without code.
          <br></br><br></br>You can download a copy of my resume from the link.<br></br><br></br><br></br>
          <center><a href='https://drive.google.com/file/d/1EVWoHkYHrGKJzpZFX5nFnuGVvFeYv9cU/view?usp=sharing' target='_blank'>RESUME</a></center>
        </p>
      </div>
    </div>
  </div>
)

export default About
