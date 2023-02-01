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
            <h2>Resume</h2> 
            <a href="avablakeresume.docx" download = {true}>Download</a>
            {renderProficiencies()}
        </div>
    )
}

export default Resume