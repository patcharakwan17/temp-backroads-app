import React from 'react'
import { socialLinks } from '../data'
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

function Footer() {
  return (<footer className="section footer">
    <PageLinks parentClass="footer-links" itemClass="footer-link" />

    <ul className="footer-icons">
      {
        socialLinks.map((link) => {
          return (
            // <li key={id}>
            //   <a href={href} target="_blank" rel='noreferrer' className="footer-icon"
            //     ><i className={icon}></i>
            //     </a>
            // </li>
            <SocialLinks key={link.id} {...link} itemClass="footer-icon" />
          )
        })
      }
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer