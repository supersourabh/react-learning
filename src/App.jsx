import {
  useCallback,
  useMemo,
  useState,
  useDeferredValue,
  Suspense,
  useEffect,
  useId,
  useReducer,
  useRef,
  Profiler,
  useActionState,
} from "react";
import "./App.css";
import { ThemeContext } from "./contexts";
import Test from "./test";
import { useFormStatus } from "react-dom";

function App() {
  console.log("rendered");

  async function submit(e) {
    await fetch("https://jsonplaceholder.typicode.com/todos/1");
    new Promise((resolve, reject) => {
      return resolve("hello");
    });
  }

  return (
    <form action={submit}>
      <input type="text" name="name" /> <br/>
      <Submit />
    </form>
  );
}

export default App;

const Submit = () => {
  const { pending, data, method, action } = useFormStatus();

  return (
    <>
      <button>{pending ? method.toUpperCase() + ": Pending" : "Submit"}</button>
      <h3>Data is : {data}</h3>
    </>
  );
};
