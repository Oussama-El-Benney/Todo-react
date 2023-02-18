import './App.css';
import {useState} from "react";
import Form from "./Form";
import Todos from "./todo/Todos";
import TodoFinal from "./todo/TodoFinal";
import TodoTailwind from "./todo/TodoTailwind";

function App() {
    const [name, setName] = useState();
    const [todos, setTodos] = useState([]);


    const handleSubmit= (e) =>{
        e.preventDefault();
        // setName(e.target.value)
        setName("");
        console.log("form submitted")
        console.log(name)
    }

    return (
        <>
        <div className="flex justify-center my-8">
      <form onSubmit={handleSubmit}>
          <fieldset>
              <div className="field">
        <label htmlFor="name">
          Name: </label>
          <input
              className=" rounded-lg border-gray-200 p-3 text-sm"
              id="name"
              type="text"
              placeholder="what to do"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
          />
              </div>
              <button
                  // disabled={!name}
                      type="submit">Submit</button>
          </fieldset>
      </form>
        </div>
        <div>
            <TodoFinal></TodoFinal>
            <TodoTailwind>  </TodoTailwind>
            {/*<Todos></Todos>*/}
        {/*<Form></Form>*/}
    </div>
            </>

      );
    }

export default App;
