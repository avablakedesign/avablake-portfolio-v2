import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import {Outlet} from "react-router-dom"
const Layout = () => {
    return (
        <div>
            <Header/>
            <main className = "content">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
export default Layout;