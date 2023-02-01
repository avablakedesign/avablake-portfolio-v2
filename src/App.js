import {Routes, Route} from "react-router-dom"
import Resume from "./components/Resume.jsx"
import Layout from "./components/Layout.jsx"
import AboutMe from "./components/AboutMe.jsx"
import Contact from "./components/Contact.jsx"
import Portfolio from "./components/Portfolio.jsx"

function App() {
  return (
  <div className="wrapper">
    <Routes>
      <Route path="/" element = {<Layout/>}>
        <Route index element = {<AboutMe/>}/>
        <Route path="/aboutme" element = {<AboutMe/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/portfolio" element = {<Portfolio/>}/>
        <Route path="/resume" element = {<Resume/>}/> 
      </Route>
    </Routes>
  </div>
  );
}

export default App;
