const Project = (props) => {
    return (
        <div className = "portfolio-project">
            <div>
                <h3>
                    {props.title}
                </h3>
            </div>
            <div className = "portfolio-project-image">
                <img src={props.image} alt={props.imageAlt}/>
            </div>
            <div className = "portfolio-link">
                <a href={props.portfolioLink}>{props.portfolioLinkName}</a>
            </div>
            <div className = "portfolio-link">
                <a href={props.githubLink}>{props.githubLinkName}</a>
            </div>
        </div>
    )
}
export default Project 