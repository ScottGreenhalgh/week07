import { useParams } from "react-router-dom";
import { findMaterial } from "../stores/materialsList";

export default function IndividualMaterial() {
  const { id } = useParams();

  const numericId = Number(id); //convert id to a number

  const materialInfo = findMaterial(numericId);

  if (!materialInfo) {
    return <p>Material not found</p>;
  }

  console.log(materialInfo);
  return (
    <div>
      <p>This is the indivual material page!</p>
      <p>The current id of the current material is {id}</p>

      <h3>{materialInfo.name}</h3>
      <br />
      <p>{materialInfo.description}</p>
      <br />
      <p>{materialInfo.funFact}</p>
    </div>
  );
}
