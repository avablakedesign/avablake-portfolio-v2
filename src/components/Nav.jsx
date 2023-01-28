import {useState} from "react"
import {Link} from "react-router-dom"
const Nav = () => {
    return (
        <nav>
            <li>
                <Link to="/contact">
                  Contact
                </Link>    
            </li>
            <li>
                <Link to="/aboutme">
                  About Me
                </Link>
            </li>
            <li>
                <Link to="/portfolio">
                  Portfolio
                </Link>
            </li>
        </nav>
    )
}
export default Nav