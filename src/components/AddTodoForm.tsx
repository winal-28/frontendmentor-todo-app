export const AddTodoForm = () => {
    return (
        <form className='addTodo'>
            <input type="checkbox" className="submit"/>
            <input type="text" placeholder="Create a new todo..." className="todoInput"/>
        </form>
    )
}