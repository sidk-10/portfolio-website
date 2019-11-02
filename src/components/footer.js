import React from 'react'
import gh from '../images/github.png'
import ig from '../images/instagram.png'
import fb from '../images/facebook.png'
import tw from '../images/twitter.png'
import gmail from '../images/gmail.png'

const Footer = () => (
    <div className='footer' id='footer'>
        <center><div className='profiles'>
            <a href='1siddharthkulkarni007@gmail.com' target='_blank'><img src={ gmail }></img></a>
            <a href='https://github.com/Maverick100199' target='_blank'><img src={ gh }></img></a>
            <a href='https://www.instagram.com/sidk_10/' target='_blank'><img src={ ig }></img></a>
            <a href='https://www.facebook.com/profile.php?id=100004253326456' target='_blank'><img src={ fb }></img></a>
            <a href='' target='_blank'><img src={ tw }></img></a>
        </div></center>
        <center>SIDDHARTH KULKARNI <span id='copyright'>&copy; 2019</span></center>
    </div>
)

export default Footer