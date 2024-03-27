import React from "react";
import { useState } from "react"

function App() {
  const [title, setTitle] = useState("Shubham");
  const onClickHandler = () => {
    setTitle(Math.random());
  }

  return (
    <>
      <button onClick={onClickHandler} >Click me to change title</button>
      <Header title={`My name is ${title}`} />
      <Header title={"abc"} />
      <Header title={"abc"} />
      <Header title={"abc"} />
      <Header title={"abc"} />
      <Header title={"abc"} />
    </>
  )
}

const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})


export default App
