import { useState } from 'react'
import './Todo.css'
import { TodoForm } from './TodoForm';
import { TodoHeader } from './TodoHeader';
import { TodoButtons } from './TodoButtons';
import { getTodoLocalStorage, setTodoLocalStorage } from './TodoLocalStorage';
import { TodoListWrapper } from './TodoListWrapper';


export const Todo = () => {

    const [task, setTask] = useState(getTodoLocalStorage)

    const handleFormSubmit = (input) => {
        
        if(input.text === '') { alert('Please enter task name'); return}
        if(task.find(t => t.text === input.text && (t.isCompleted !== input.isCompleted || t.isCompleted === input.isCompleted))){
            alert('Task already exists')
             return
        }
        setTask([...task, {id: input.text, text: input.text, isCompleted: false}])
    }

    //todo store data to local storage
    setTodoLocalStorage(task)

    //todo check button
        const handleCheckBtnClick = (currTask) => {
            const updatedTasks = task.map(t => t === currTask ? { ...t, isCompleted: !t.isCompleted } : t);
            setTask(updatedTasks)
        }
    
    //todo delete button
        const handleDeleteBtnClick = (currTask) => {
            const newTask = task.filter((task) => task !== currTask)
            setTask(newTask)
    
        }

    //todo check all tasks
        const handleCheckAll = () => {

            const areAllCompleted = task.every(alc => alc.isCompleted) //this will check in array if all are completed or not

            const updateTasks = task.map(ct => ({...ct, isCompleted:!areAllCompleted})) // uncheck all if all are checked, otherwise check all

            setTask(updateTasks)
        }

    return (

        <section className='todo-container'>
            <TodoHeader />
            <TodoForm onAddTodo= {handleFormSubmit} />
            <TodoListWrapper task={task} handleCheckBtnClick={handleCheckBtnClick} handleDeleteBtnClick={handleDeleteBtnClick}/>
            <TodoButtons checkAll={handleCheckAll} clearAll={setTask}/>
        </section>
    )
}