import { useState } from "react";

function Todolist(props) {
  return (
    <div className="w-screen h-screen bg-gray-800 flex justify-center align items-center">
      <div>
        <h1 className="text-white font-bold text-center">WELCOME TO TODOLIST</h1>
        <input
          className=" w-80"
          onChange={(event) => props.setnewTodo(event.target.value)}
          value={props.newtodo}
          type="text"
          placeholder="TODO"
        ></input>
        <br></br>
        <button onClick={props.clickable} className="w-40 h-6 bg-gray-900 text-white  ">Submit</button>
        <button className= "bg-red-900 w-40 h-6">RESET</button>
        <div className=" h-44 overflow-auto border p-1 border-blue-900 rounded-lg ">
          {props.todos.map((todo) => (
            <p className="text-white" key={todo.id}>
              {todo.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function App(props) {



  const [todos, setTodos] = useState([
    { id: 1, text: "code every day", done: false },
    { id: 2, text: "bebe time every day", done: false },
    { id: 3, text: "Eat Every day", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  function handleAddTodo(){

    if(newTodo.trim() === "") return;

  const newtodoobject = {
    id: todos.length + 1,
    text: newTodo,
    done : false 
  };


  setTodos([...todos , newtodoobject ]);
  setNewTodo("");
}


  function helloworld(){
    const helloObject ={
      id: todos.length + 1 ,
      text : "Hello world!!",
      done: false 
    };
  }

  return (
    <Todolist todos={todos} newtodo={newTodo} setnewTodo={setNewTodo} clickable = {handleAddTodo}/>
    /* 
  Dito pala ikaw magse-set ng name ng props mo.
  Kunwari yan nga `todos` ang name ng prop na naglalaman ng todos array.
  Ngayon sa child component na `Todolist`, 
  ang parameter ay `props` — at yun ang gagamitin mong name 
  para makuha yung prop na galing sa parent.
  Kaya `props.todos.map()` ang gamit para ma-loop yung array.
  
*/
  );
}

export default App;

//
