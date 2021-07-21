import ToggleThemeIcon from '../images/icon-sun.svg';

export const TodoHeader = () => {
    return (
      <div className="todoHeader">
            <h1 className='title'>TODO</h1>
            <img src={ToggleThemeIcon} alt="toggleTheme" className="toggleTheme"/>
     </div>
    )
}