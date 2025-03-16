import { useCallback, useMemo, useState, useDeferredValue, Suspense, useEffect, useId, useReducer, useRef, Profiler } from 'react'
import './App.css'
import { ThemeContext } from './contexts'
import Test from './test';




function App() {
  console.log('rendered');
  
  const iref = useRef(null)


  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Test />
    </Suspense>
  );
}
export default App

const Loading = () => {
  return (
    <h1>Loading...</h1>
  )
}

