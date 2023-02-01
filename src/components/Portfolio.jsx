import PortfolioProject from "./PortfolioProject"

const Portfolio = () => {
    return (
        <div>
            <PortfolioProject title="PWA App" image="pwa-screenshot.png" portfolioLink="https://ava-pwa-text-editor.herokuapp.com/" githubLink="https://github.com/avablakedesign/avablake-pwa-text-editor" imageAlt="PWA Image" githubLinkName="PWA Github" portfolioLinkName="PWA Project" />
            <PortfolioProject title="Nocturne" image="nocturne-screenshot.png" portfolioLink="https://nocturne-radio.herokuapp.com/home" githubLink="https://github.com/avablakedesign/lofi-nights" imageAlt="A radio app" githubLinkName="Nocturne Github" portfolioLinkName="Nocturne" />
            <PortfolioProject title="Portfolio v1" image="avablake-portfolio-screenshot.png" portfolioLink="https://avablakedesign.github.io/avablake-portfolio/" githubLink="https://github.com/avablakedesign/avablake-portfolio" imageAlt="A portfolio" githubLinkName="Portfolio v1 Github" portfolioLinkName="Portfolio v1" />
            <PortfolioProject title="Calendar" image="screenshot-one.png" portfolioLink="https://avablakedesign.github.io/avablake-calendar-work-day-scheduler/" githubLink="https://github.com/avablakedesign/avablake-calendar-work-day-scheduler" imageAlt="A calendar" githubLinkName="Calendar Github" portfolioLinkName="Calendar" />
            <PortfolioProject title="Weather Dashboard" image="weather-screenshot.png" portfolioLink="https://avablakedesign.github.io/avablake-weather-dashboard/" githubLink="https://github.com/avablakedesign/avablake-weather-dashboard" imageAlt="Weather" githubLinkName="Weather Dashboard Github" portfolioLinkName="Weather Dashboard" />
            <PortfolioProject title="Give Manna" image="screenshot-1.png" portfolioLink="https://frutaseca.github.io/Give-Manna/" githubLink="https://github.com/frutaseca/Give-Manna" imageAlt="A picture of a nonprofit" githubLinkName="Non-Profit Github" portfolioLinkName="Non-Profit" />
        </div>
    )
}

export default Portfolio