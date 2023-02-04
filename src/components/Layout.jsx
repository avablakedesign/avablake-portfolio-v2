import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import {Outlet} from "react-router-dom"
//Defining the layout for all the pages in the application. 
const Layout = () => {
    return (
        <div>
            <Header/>
            {/*Here I am creating an outlet for subroutes to inject content into the main element.*/}
            <main className = "content">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
export default Layout;