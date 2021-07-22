export const AddTodoForm = () => {
    return (
        <form className='addTodo'>
            <input type="checkbox" className="checkbox submit"/>
              <span className="checkmark"></span>
            <input type="text" placeholder="Create a new todo..." className="todoInput"/>
        </form>
    )
}