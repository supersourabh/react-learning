import { useParams } from "react-router-dom";
import "./App.css";

function About() {
  const { id } = useParams();

  return <div>About Page : {id}</div>;
}

export default About;
