import { useEffect, useState } from 'react'
import './App.css'
import {usePostTitle} from './hooks/useFetch'

function App() {
  const postTitle = usePostTitle();
  return (
    <div>
      {postTitle}
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
