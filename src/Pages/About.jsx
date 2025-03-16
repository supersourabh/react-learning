import { useParams } from "react-router-dom";

function About() {
  const { id } = useParams();

  return <h1>About Page  {id}</h1>
}

export default About;
