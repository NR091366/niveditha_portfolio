import React, {useRef} from 'react'
import './Contact.css'
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id='contactSection'>
      <div className='contactMe'>Contact Me</div>
      <span className='contactDesc'>Just hit below button to mail anything that you want. </span>
      <a style={{fontSize:'large'}} href="mailto:katkarsaurabh2@gmail.com" className='submit-button' target="_blank" rel="noopener noreferrer">
        Send Mail!
      </a>
    </div>
  )
}

export default Contact
