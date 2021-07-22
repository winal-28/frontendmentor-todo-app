import { TodoHeader } from './TodoHeader';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

export const TodoContainer = () => {
    return (
        <div className='todoContainer'>
            <TodoHeader />
            <AddTodoForm />
        </div>
    )
};