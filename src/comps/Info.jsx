import { useParams } from "react-router-dom";

function CInfo() {
  const { id } = useParams();

  return <h3> my_id@gmail.com</h3>
}

export default CInfo;
