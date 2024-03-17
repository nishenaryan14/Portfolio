import { projects } from "../../dummyData";
import Template from "../template/Template";
export default function Templates() {
  return (
    <div className="templates">
      {projects.map((project) => (
        <Template project={project} />
      ))}
    </div>
  );
}
