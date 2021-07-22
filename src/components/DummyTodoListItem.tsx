
export const TodoListItem = () => {
    return (
        <li className="todoListItem">
            <label>
                <input type="checkbox"/>
                <p className="todoText">The quick brown fox jumps over the lazy dog</p>
            </label>
        </li>
    )
}