function App() {

  return (
    <>
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper>Hii Shubham</CardWrapper>
    </>
  )
}

function TextComponent(){
  return <div>
    Hii there
  </div>
}

function CardWrapper({innerComponent, children}){
  return(
    <div style={{border: "2px solid black", padding: 20}}>
      {innerComponent}
      {children}
    </div>
  )
}

export default App
