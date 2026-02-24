import Navbar from "../../components/Navbar";
import FredProjects from "../Projects/FredProjects";
import FredResume from "../Resume/FredResume";

const FredHome = () => {
  return (
    <div>
      <section id="snapshot">
        <h1 className="text-forest">Frederson</h1>
        <h2>CS Kid</h2>
      </section>

      <Navbar />

      <section id="about">
        <h2>About and skills</h2>S
      </section>

      <section id="experience">
        <FredResume />
      </section>

      <section id="projects">
        <FredProjects />
      </section>
    </div>
  );
}

export default FredHome;