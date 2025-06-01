import { TodoList } from './TodoList';

export const TodoListWrapper = ({task, handleCheckBtnClick, handleDeleteBtnClick}) => {

    return (
        <section className='myUnOrdList'>
            <ul className='todo-list'>
                { task.map((currTask) => <TodoList
                                            key={currTask.id} 
                                            currTask={currTask} 
                                            onDltTask={handleDeleteBtnClick} 
                                            onCheckTask={handleCheckBtnClick}/>
                           )
                }
            </ul>
        </section>
    )
}