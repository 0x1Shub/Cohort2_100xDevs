import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 5000)
  }, []);

  return (
    <>
      {render ? <MyComponent /> : <div></div>}
    </>
  )
}


// function MyComponent() {
//   useEffect(() => {
//     console.error("component mounted");

//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);

//   return <div>
//     From inside my component
//   </div>
// }


class MyComponent extends React.Component {
  componentDidMount() {
    console.log("component mounted");
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  render() {
    return <div>Hii there</div>
  }
}


export default App