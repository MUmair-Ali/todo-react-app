import { useState } from "react"

export const TodoForm = ({onAddTodo}) => {

    const [input, setInput] = useState({id: '', text: '', isCompleted: false})

    const handleInputChange = (inputValue) => {
        setInput(inputValue)
    }

    const handleFormSubmit = (event) => {

        event.preventDefault();
        onAddTodo(input)
        setInput({id: '', text: '', isCompleted: false})
    }

    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                 <div>
                    <input type='text' autoComplete='off' value={input.text} onChange={(event) => {handleInputChange({id: event.target.value, text: event.target.value, isCompleted: false})}}/>
                 </div>
                 <div>
                    <button type='submit' className='todo-btn'>Add Task</button>
                 </div>
            </form>
        </section>
    )
}