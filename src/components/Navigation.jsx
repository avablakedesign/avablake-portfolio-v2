import {useState} from "react"
import {Link, useLocation} from "react-router-dom"
const Navigation = () => {
    const location = useLocation()
    // This is taking the pathname from location and using the value without a slash as the default state.
    const [selectedLink, setSelectedLink] = useState(location.pathname.slice(1) || "aboutme");
    const renderNavLinks = () => {
      const navLinks = [
        {
          linkName: "contact",
          to: "/contact",
          linkText: "Contact"
        },
        {
          linkName: "aboutme",
          to: "/aboutme",
          linkText: "About Me"
        },
        {
          linkName : "portfolio",
          to: "/portfolio",
          linkText: "Portfolio"
        },
        {
          linkName: "resume",
          to: "/resume",
          linkText: "Resume"
        }
      ];
      return navLinks.map((item)=>{
        return(
          <li onClick = {()=>setSelectedLink(item.linkName)} className = {selectedLink === item.linkName ? "link link-selected" : "link"} key={item.linkName}>
            <Link to={item.to}>
              {item.linkText}
            </Link>    
          </li>
        )
      })
    }
    return (
        <nav>
            <ul>
              {renderNavLinks()}
            </ul>  
        </nav>
    )
}
export default Navigation