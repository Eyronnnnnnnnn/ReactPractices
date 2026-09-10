import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

function Todolist(props) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[40rem]">
        <h1
          className="
          text-[clamp(2rem,2vw,2.5rem)] 
          font-semibold 
          tracking-[-0.06em] 
          text-[#191919] 
          text-center 
          font-sans mb-6
        "
        >
          Developed by <hr></hr>
        </h1>

        <h1>Task Done : {props.donetodo} Task Created : {props.todos.length}</h1>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border-2 border-[#191919] rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            onChange={(event) => props.setnewTodo(event.target.value)}
            value={props.newtodo}
            type="text"
            placeholder="Enter a task..."
          />
          <button
            onClick={props.clickable}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Submit
          </button>
          <button
            onClick={props.reset}
            className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
          >
            <TrashIcon className="h-5 w-5" />
            RESET
          </button>
        </div>

        <div className="h-44 overflow-auto border border-gray-300 rounded-md p-2">
          <div className="text-[#191919] font-semibold mb-2">Todo List</div>
          {props.todos.map((todo) => (
            <div
              className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md mb-2"
              key={todo.id}
            >
              <span className="text-[#191919]">
                {todo.id}. {todo.text}
              </span>
               <label>
                <input 
                checked = {todo.done}
                onChange={()=>props.toggle(todo.id)}
                type="checkbox" />
                Done
              </label>
              <button
                onClick={() => props.deleted(todo.id)}
                className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
              >
                Delete
              </button>
             
            </div>
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
  const [nextid, setnextId] = useState(4);

  function handleAddTodo() {
    if (newTodo.trim() === "") return;

    const newtodoobject = {
      id: nextid,
      text: newTodo,
      done: false,
    };

    setTodos([...todos, newtodoobject]);
    setNewTodo("");
    setnextId(nextid + 1);
  }

  function deletedTodo(id) {
    
    setTodos(todos.filter((todo) => todo.id !== id));
    
  }

  function toggledone(id){
    setTodos(todos.map((todo)=> 
      todo.id === id
     ? {...todo , done : !todo.done}
      : todo
    )
  );
  }



  function ResetFunction() {
    setTodos([]);
    setnextId(1);
    
  }

    const doneCount = todos.filter((todo)=> todo.done=== true).length;

  return (
    <Todolist
      todos={todos}
      newtodo={newTodo}
      setnewTodo={setNewTodo}
      clickable={handleAddTodo}
      deleted={deletedTodo}
      reset={ResetFunction}
      toggle = {toggledone}
      donetodo = {doneCount}
    />
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
