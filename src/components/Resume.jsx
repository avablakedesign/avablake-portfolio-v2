const Resume = () => {
    const proficiencies = ["HTML", "CSS", "JavaScript", "MERN Stack - MongoDB, Express.js, React, Node.js"];
    const renderProficiencies = () => {
        return proficiencies.map((item) => {
            return (
                <div className = "Skill" key={item}>
                    <p>
                        {item}
                    </p>
                </div>
            )
        })
    }
    return (
        <div>
            <h2 className = "page-header">Resume</h2> 
            <div className = "download">
            <a href="avablakeresume.docx" download = {true}>Download</a>
            </div>
            <div className = "skill-set">
                <h3>My Skill Set</h3>
            </div> 
            {renderProficiencies()}
        </div>
    )
}

export default Resume