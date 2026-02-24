import './Resume.scss'

function CaullyResume() {

    const jobs = [
    {
      id: 1,
      company: "Company A",
      title: "Senior Developer",
      location: "DC",
      dates: "2022 - Present",
      description: "Led a team of 5 developers...",
      skills: "img src"
    },
    {
      id: 2,
      company: "Company B",
      title: "Full Stack Developer",
      location: "DC",
      dates: "2020 - 2022",
      description: "Built responsive web applications...",
      skills: "img src"
    }
  ];

  return (
    <div id="experience">
      <h2>Experience</h2>
      <div className="jobs-container">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
            <p className="dates">{job.dates}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaullyResume;