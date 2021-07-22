import { TodoHeader } from './TodoHeader';
import { AddTodoForm } from './AddTodoForm';

export const TodoContainer = () => {
    return (
        <div className='todoContainer'>
            <TodoHeader />
            <AddTodoForm />
        </div>
    )
};