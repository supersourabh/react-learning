import { useParams } from "react-router-dom";

function CForm() {
  const { id } = useParams();

  return (
    <>
      <h3>This is contact form </h3>
      <h3>Id is : {id} </h3>
    </>
  );
}

export default CForm;
