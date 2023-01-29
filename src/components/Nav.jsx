import {useState} from "react"
import {Link} from "react-router-dom"
const Nav = () => {
    const [selectedLink, setSelectedLink] = useState("aboutme");
    return (
        <nav>
            <ul>
              <li onClick = {()=>setSelectedLink("contact")} className={selectedLink === "contact" ? "link-selected" : "link"}>
                <Link to="/contact">
                  Contact
                </Link>    
              </li>
              <li onClick = {()=>setSelectedLink("aboutme")} className={selectedLink === "aboutme" ? "link-selected" : "link"}>
                <Link to="/aboutme">
                  About Me
                </Link>
              </li> 
              <li onClick = {()=>setSelectedLink("portfolio")} className={selectedLink === "portfolio" ? "link-selected" : "link"}>
                <Link to="/portfolio">
                  Portfolio
                </Link>
              </li> 
              <li onClick = {()=>setSelectedLink("resume")} className={selectedLink === "resume" ? "link-selected" : "link"}>
              <Link to="/resume">
                Resume
              </Link>
              </li>
            </ul>  
        </nav>
    )
}
export default Nav