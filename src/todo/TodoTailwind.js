
function TodoTailwind() {

    return (
        <>
            <div className="h-100 w-full flex items-center justify-center bg-teal-50 font-sans">
    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                       placeholder="Add Todo"></input>
                    <button
                        className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500">Add
                    </button>
            </div>
        </div>
        <div>
            <div className="flex mb-4 items-center">
                <p className="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                <button
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Done
                </button>
                <button
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove
                </button>
            </div>
            <div className="flex mb-4 items-center">
                <p className="w-full line-through text-green">Submit Todo App Component to Tad </p>
                <button
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 hover:bg-gray-500 border-gray-500 ">Not Done
                </button>
                <button
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove
                </button>
            </div>
        </div>
    </div>
</div>
</>
);
}

export default TodoTailwind;
