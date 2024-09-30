import { Link } from "react-router-dom";
import { materials } from "../stores/materialsList";
export default function Materials() {
  return (
    <div>
      {materials.map((material) => (
        <div key={material.id}>
          <Link to={`/materials/${material.id}`}>{material.name}</Link>
        </div>
      ))}
    </div>
  );
}
