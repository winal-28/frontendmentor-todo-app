export const TodoContainer = () => {
    return (
        <div className='todoContainer'>
            <div className="TodoHeader">
                <h1 className='title'>TODO</h1>
                <img className='themeToggle' src="{require('../images/icon-sun.svg')}"  alt='Toggle on and off dark mode' />
            </div>
        </div>
    )
};