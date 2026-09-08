  import { useState } from "react";


  function Todolist(props){

    return(
      <div className="w-screen h-screen bg-gray-800 flex justify-center align items-center">
        <div >
          <h1 className="text-white">welcome to todolist</h1>
          <div>
            {props.todos.map(todo=>(
              <p className="text-white" key={todo.id}>{todo.text}</p>
            ))}
          </div>
        </div>
      </div>
    )

  }

  function App(props) {
    const [todos, setTodos] = useState([
      { id: 1, text: "code every day", done: false },
      { id: 2, text: "bebe time every day", done: false },
      { id: 3, text: "Eat Every day", done: false },
    ]);

    return (
      <Todolist todos = {todos}/>
    );
  }

  export default App;
