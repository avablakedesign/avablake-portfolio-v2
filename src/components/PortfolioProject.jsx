const PortfolioProject = (props) => {
    return (
        <div className = "portfolio-project">
            <div>
                <h3>
                    {props.title}
                </h3>
            </div>
            <div>
                <img src={props.image} alt={props.imageAlt}/>
            </div>
            <div>
                <a href={props.portfolioLink}>{props.portfolioLinkName}</a>
            </div>
            <div>
                <a href={props.githubLink}>{props.githubLinkName}</a>
            </div>
        </div>
    )
}
export default PortfolioProject 