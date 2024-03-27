import { useState } from "react"

function App() {

  return (
    <>
      <HeaderWithButton />
      <Header title={"My name is raman"} />
    </>
  )
}


function HeaderWithButton(){
  const [title, setTitle] = useState("Shubham");
  const onClickHandler = () => {
    setTitle(Math.random());
  }

  return (
    <>
      <button onClick={onClickHandler} >Click me to change title</button>
      <Header title={`My name is ${title}`} />
    </>
  )


}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App