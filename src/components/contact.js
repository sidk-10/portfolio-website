import React from 'react'

const Contact = () => (
  <div className='contact' id='contact'>
    <div className='empty'></div>
    <div className='contact_title'>CONTACT</div>
    <center><div className='highlight2'></div></center>
    <center><div id='q'>Have a question or want to work together??</div></center>
    <center><form name='contact_me'  method='POST' data-netlify='true'>
      <input type='text' placeholder='Name' name='name' required></input><br></br>
      <input type='email' placeholder='Email' name='email' required></input><br></br>
      <textarea placeholder='Message' rows='5' name='message' required></textarea><br></br>
      <button type='submit' className='button' value='SUBMIT'></input>
    </form></center>>
  </div>
)

export default Contact
