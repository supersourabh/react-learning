import { useCallback, useMemo, useState, useDeferredValue, Suspense, useEffect, useId, useReducer, useRef, Profiler, useActionState } from 'react'
import './App.css'
import { ThemeContext } from './contexts'
import Test from './test';


function App() {
  console.log('rendered');
  

  function increment(prevState, formData){
    console.log(formData.get("name"));
    return prevState + 1;
  }

  const [ number ,action , isPending] = useActionState(increment, 0);
  return (
    <form>
      {isPending ? "Loading...": number} <br />
      <input  type="text" name='name' value="Sourabh" /> <br />
      <button formAction={action}>
        Click me
      </button>
    </form>
  );
}

export default App

const Loading = () => {
  return (
    <h1>Loading...</h1>
  )
}

