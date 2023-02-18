import {useState} from "react";
import cn from "classnames";

function TodoElement(props) {
    console.log(props)
    console.log(props.todo.isDone)
    return (
        <>
            <div className="flex mb-4 items-center">
                <p
                    className={cn('w-full text-green ' + (props.todo.isDone ? '' : 'line-through'))}

                >{props.todo.content}</p>
                {(!props.todo.isDone) ? <button
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 hover:bg-gray-500 border-gray-500 ">Not
                    Done
                </button> : <button
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Done
                </button>

                }


                <button
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove
                </button>
            </div>
        </>
    );
}

function Todos() {
    let todosArray = [
        {
            content: "John",
            isDone: false,
        },
        {
            content: "hary",
            isDone: true,
        },
        {
            content: "mandy",
            isDone: false,
        },
    ];
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState(todosArray);
    const handleSubmit = (e) => {
        e.preventDefault();
        // setName(e.target.value)
        console.log(todo)
        let addedTodo = {
            content: todo,
            isDone: false
        };
        setTodos(todos.push(addedTodo))
        console.log(todos)
        // setTodo("");
        console.log("form submitted")
        console.log(todo)
    }
    return (
        <>
            <div className="flex my-8  flex-col  justify-center">
                <div className="flex justify-center">
                    <h1 className="font-bold text-3xl text-green-500">What do u think of doinjj</h1>
                </div>
                <div className="flex justify-center flex-wrap my-8">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="sr-only" htmlFor="todo">Todos</label>
                            <input
                                className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                placeholder="enter what to be doinjjjjjj"
                                type="text"
                                id="todo"
                                value={todo}
                                onChange={(e) => setTodo(e.target.value)}
                            />
                        </div>
                        <button
                            className="bg-green-200 text-green-500 font-semibold  py-2 px-4 mt-4 mr-4 border border-transparent  rounded"
                            type="submit"
                            disabled={!todo}>Add
                        </button>
                    </form>
                </div>
                <div className="h-100 w-full flex items-center justify-center bg-teal-50 font-sans">
                    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">

                        {todos.map((todo, index) => (<TodoElement key={index} todo={todo}></TodoElement>))}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Todos;
