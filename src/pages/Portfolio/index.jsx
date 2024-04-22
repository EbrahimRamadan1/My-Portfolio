import "./index.scss";
import jsonProjects from "../../Projects.json";
import Project from "../../components/Project";

export default function Portfolio() {
  return (
    <div className="Portfolio col-12">
      <h2 className="col-12 text-center">
        MY <span>PORTFOLIO</span>
      </h2>
      <h3 className="col-12 text-center">
        <span>GITHUB:</span>{" "}
        <a href="https://github.com/EbrahimRamadan1" target="_blank" rel="noreferrer">EbrahimRamadan1</a>
      </h3>
      {jsonProjects.map((el) => {
        return (
          <Project
            key={el.id}
            name={el.name}
            discription={el.discription}
            languages={el.languages}
            link={el.preview}
          />
        );
      })}
    </div>
  );
}
