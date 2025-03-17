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
} from "react";
import "./App.css";
import { ThemeContext } from "./contexts";
import Test from "./test";

function App() {
  console.log("rendered");
  // function reducer(user, action) {
  //   if (action.type == 'UPDATE') {
  //     return {...user, age: user.age + 5 }
  //   }
  //   throw 'Unknown error'
  // }
  const [theme, setTheme] = useState("light");
  // const [scroll, setScroll] = useState(1)
  // window.addEventListener('scroll', (e) => {
  //   setScroll(window.scrollY)
  // })

  // const [user, dispatch] = useReducer(reducer, { name: 'sk', age: 20 })
  const iref = useRef(null);
  const id = useId();

  const [mm, setMm] = useState({ x: 0, y: 0 });
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState(0);

  const move = (e) => {
    setMm({ x: e.clientX, y: e.clientY });
    console.log(mm);
  };

  const keyAct = (e) => {
    let k = e.key;
    console.log("key : " + k);

    if (k == "ArrowDown") setColor("blue");
    else if (k == "ArrowUp") setColor("green");
    else if (k == "ArrowRight") setColor("yellow");
    else if (k == "ArrowLeft") setColor("red");
  };

  const [l, j] = useState(false);
  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    // console.log([id, phase, actualDuration, baseDuration, startTime, commitTime]);
  }

  const [count, setCount] = useState(3);
  let interval;
  

  useEffect(() => {
    if (count <= 0) {
      return
    }
     interval = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  // const [item, setItem] = useState()
  let item = null;
  const [item1, setItem1] = useState([
    "item11",
    "item12",
    "item13",
    "item14",
    "item15",
  ]);
  const [item2, setItem2] = useState(["item21", "item22", "item23"]);

  const ulStyle = {
    listStyle: "none",
    border: "2px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    padding: "20px",
  };

  const style = {
    width: "100px",
    height: "100px",
    background: "grey",
    margin: "10px",
  };

  const handleDragStart = (e, index, list) => {
    console.log(e);
    e.dataTransfer.setData("list", list);
    e.dataTransfer.setData("index", index);
  };

  const handleDrop = (e, targetList) => {
    const draggedIndex = e.dataTransfer.getData("index");
    const draggedList = e.dataTransfer.getData("list");

    if (draggedList === targetList) return;
    // Update the state to move the item from one list to another
    if (draggedList === "list1") {
      const itemToMove = item1[draggedIndex];
      setItem1(item1.filter((_, index) => index !== parseInt(draggedIndex)));
      setItem2([...item2, itemToMove]);
    } else {
      const itemToMove = item2[draggedIndex];
      setItem2(item2.filter((_, index) => index !== parseInt(draggedIndex)));
      setItem1([...item1, itemToMove]);
    }
  };

  return (
    <Profiler id={id} onRender={onRender}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* <div>
          <ul style={ulStyle} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, 'list1')} >
            {item1.map((e, i) =>
              <li draggable="true" onDragStart={(e) => handleDragStart(e, i, 'list1')} style={style}>{e}</li>
            )}
          </ul>
        </div>
        <div>
          <ul style={ulStyle} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, 'list2')}>
            {item2.map((e, i) =>
              <li draggable="true" onDragStart={(e) => handleDragStart(e, i, 'list2')} style={style}>{e}</li>
            )}
          </ul>
        </div> */}

        <div>{count}</div>

        {/* <div onMouseMove={(e)=>{move(e)}} style={{ background: 'red', height: '100vh', width: '100vh' }}>
          
        </div>
        <div style={{position: 'absolute' , top: mm.y, left: mm.x, width:'50px', height:'50px', background:'green', borderRadius:'50%'}}></div>
        <input type='text' onKeyUp={(e)=>keyAct(e) } value={number} min={0} max={100} onChange={(e)=> setNumber(e.target.value)} />
        
        <div style={{width: '200px', height:'20px', background:'white', borderRadius: "10px", overflow: 'hidden'}}>
          <div style={{width: `${number}%`, height:'20px', background: color , }}>

          </div>
        </div> */}
      </ThemeContext.Provider>
    </Profiler>
  );
}
export default App;

const Loading = () => {
  return <h1>Loading...</h1>;
};
