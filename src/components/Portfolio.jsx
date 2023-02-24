//Portfolio content
import Project from "./Project"
//Renders individual projects as components.
const Portfolio = () => {
    return (
        <div className = "portfolio">
            <Project title="PWA App" image="pwa-screenshot.png" portfolioLink="https://ava-pwa-text-editor.herokuapp.com/" githubLink="https://github.com/avablakedesign/avablake-pwa-text-editor" imageAlt="PWA Image" githubLinkName="PWA Github" portfolioLinkName="PWA Project" />
            <Project title="Nocturne" image="nocturne-screenshot.png" portfolioLink="https://nocturne-radio.herokuapp.com/home" githubLink="https://github.com/avablakedesign/lofi-nights" imageAlt="A radio app" githubLinkName="Nocturne Github" portfolioLinkName="Nocturne" />
            <Project title="Portfolio v1" image="avablake-portfolio-screenshot.png" portfolioLink="https://avablakedesign.github.io/avablake-portfolio/" githubLink="https://github.com/avablakedesign/avablake-portfolio" imageAlt="A portfolio" githubLinkName="Portfolio v1 Github" portfolioLinkName="Portfolio v1" />
            <Project title="Calendar" image="screenshot-one.png" portfolioLink="https://avablakedesign.github.io/avablake-calendar-work-day-scheduler/" githubLink="https://github.com/avablakedesign/avablake-calendar-work-day-scheduler" imageAlt="A calendar" githubLinkName="Calendar Github" portfolioLinkName="Calendar" />
            <Project title="Weather Dashboard" image="weather-screenshot.png" portfolioLink="https://avablakedesign.github.io/avablake-weather-dashboard/" githubLink="https://github.com/avablakedesign/avablake-weather-dashboard" imageAlt="Weather" githubLinkName="Weather Dashboard Github" portfolioLinkName="Weather Dashboard" />
            <Project title="Give Manna" image="screenshot-1.png" portfolioLink="https://frutaseca.github.io/Give-Manna/" githubLink="https://github.com/frutaseca/Give-Manna" imageAlt="A picture of a nonprofit" githubLinkName="Non-Profit Github" portfolioLinkName="Non-Profit" />
            <Project title="Dragonpunk" image="dragonpunk_screenshot.png" portfolioLink="https://dragonpunk.herokuapp.com/" githubLink="https://github.com/avablakedesign/dragonpunk" imageAlt="A hobby shop website" githubLinkName="Dragonpunk Github" portfolioLinkName="Dragonpunk" />
        </div>
    )
}

export default Portfolio