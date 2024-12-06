import { useEffect, useState } from 'react'
import './App.css'
import {useFetch} from './hooks/useFetch'

// function App() {
//   const postTitle = usePostTitle();
//   return (
//     <div>
//       {postTitle}
//     </div>
//   )
// }

function App(){
  const [currentPost , setCurrentPost] = useState(1);
  const { finalData , loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  //assignment: hit the button every 10 secs

  if( loading ){
    return (<div>
      Loading...
    </div>)
  }

  return (
    <div>
      <button onClick={() => {setCurrentPost(1)}}>1</button>
      <button onClick={() => {setCurrentPost(2)}}>2</button>
      <button onClick={() => {
        setCurrentPost(3)
      }}>3</button>
      {JSON.stringify(finalData)}
    </div>
  )
}
export default App
// //pretty basic custom hooks example
// function useCounter(){
//   const [count, setCount] = useState(0)

//   function increaseCount(){
//     setCount(count + 1)
//   }
//   return {
//     count : count,
//     increaseCount : increaseCount
//   }
// }
// function App() {

//   return (
//     <>
//     <CounterComponent />
//     <CounterComponent />
//     </>
//   )
// }
// function CounterComponent(){
//   const {count , increaseCount} = useCounter();

//   return (
//     <div>
//       <button onClick={increaseCount}>Increase : {count}</button>
//     </div>
//   )
// }
