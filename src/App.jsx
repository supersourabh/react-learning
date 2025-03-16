import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact";
import Home from "./Home";
import Layout from "./Layout";
import ContactLayout from "./Pages/ContactLayout";
import CInfo from "./comps/Info";
import CForm from "./comps/Form";
import About from "./Pages/About";
import NotFound from "./comps/NotFound";
import ErrorElement from "./comps/ErrorElement";
import PrivateRoute from "./comps/PrivateComponent";
import PrivateComponent from "./comps/PrivateComponent";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="contact"
          element={
            <PrivateComponent>
              <ContactLayout />
            </PrivateComponent>
          }
          errorElement={<ErrorElement />}
          loader={loadSampleData}
        >
          <Route path="info" element={<CInfo />} />
          <Route path="form" element={<CForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

async function loadSampleData() {
  let data = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" +
      Math.floor(Math.random() * 10)
  );
  if (data.status == 200) {
    return data.json();
  } else {
    throw Error("Status : " + data.status + " | Error : Something went wrong ");
  }
}
