import { NavLink, Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo"></img>
        <img className="sub-logo" src={LogoSubtitle} alt="Senad"></img>
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/senad-djerlek-97625411b/?originalSubdomain=au"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a> */}
          {/* <a target="blank" rel="noreferrer" href="https://github.com/Senaddd">
            <FontAwesomeIcon icon={faGitHub} color="#4d4d4e" />
          </a> */}
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
