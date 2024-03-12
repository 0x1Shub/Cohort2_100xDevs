import { useInterval } from './hooks/useInterval';
import { useIsOnline } from './hooks/useIsOnline';
import { useMousePointer } from './hooks/useMousePointer';
import { useEffect, useState } from 'react';

// function App() {
//   const mousePointer = useMousePointer();
//   const isOnline = useIsOnline(5);

//   return (
//     <>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//       <br />
//       {isOnline ? "You are online yay!" : "You are not online"}
//     </>
//   )
// }

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App