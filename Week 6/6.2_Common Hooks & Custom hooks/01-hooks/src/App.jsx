import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [selectedId, setSelectedId] = useState(1);

  return <div>
    <button onClick={() => setSelectedId(1)}>1</button>
    <button onClick={() => setSelectedId(2)}>2</button>
    <button onClick={() => setSelectedId(3)}>3</button>
    <button onClick={() => setSelectedId(4)}>4</button>
    <Todo id={selectedId} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function(res) {
        const json = await res.json();
        setTodo (json.todo);
      })
  }, [id])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;