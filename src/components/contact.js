import React from 'react'

const Contact = () => (
  <div className='contact' id='contact'>
    <div className='empty'></div>
    <div className='contact_title'>CONTACT</div>
    <center><div className='highlight2'></div></center>
    <center><div id='q'>Have a question or want to work together??</div></center>
    <center><form name='contact' method='POST' data-netlify='true'>
      <p><input type='text' placeholder='Name' name='name' required /></p>
      <p><input type='email' placeholder='Email' name='email' required /></p>
      <p><textarea placeholder='Message' rows='5' name='message' required></textarea></p>
      <p><button type='submit' className='button' value='SUBMIT'></button></p>
    </form></center>
  </div>
)

export default Contact
