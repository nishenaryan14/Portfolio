import { projects } from "../../dummyData";
import Template from "../template/Template";
export default function Templates() {
  return (
    <div className="templates">
      {projects.map((project) => (
        <Template url={project.url} key={project.id} />
      ))}
    </div>
  );
}
