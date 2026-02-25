import './Projects.scss'

function CaullyProjects() {

  const Exp = ({ title, skills, desc }) => (
        <div className="jobListing">
            <h1 className="text-forest">{title}</h1>
            <h2 className="text-forest">{skills}</h2>
            <p className="text-forest">{desc}</p>
        </div>
    );

    return (
        <div>
            <Exp 
              title="project title"
              skills="skills used"
              desc="description of said project" />
        </div>
    );
}

export default CaullyProjects;