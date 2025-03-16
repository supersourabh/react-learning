import { useLoaderData, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const data = useLoaderData();
  return (
    <>
      <h1>Contact Page</h1>
      <button onClick={() => navigate("info")}>Info</button>
      <button onClick={() => navigate("form")}>Form</button>
      <br />
      <h2>
        Id : {data.id} , title : {data.title}
      </h2>
    </>
  );
}

export default Contact;
