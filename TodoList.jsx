import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const TodoList = ({currTask, onDltTask, onCheckTask}) => {

    return (
        <li className='todo-item'>
            <span className={currTask.isCompleted ? 'checkList' : 'notCheckList'}>{currTask.text}</span>
            <section className="action-container">
                <button className='check-btn' onClick={() =>onCheckTask(currTask)}><FaCheck /></button>
                {/*<button className="edit-btn" onClick={}><MdEdit /></button>*/}
                <button className='delete-btn'onClick={() => onDltTask(currTask)}><MdDelete /></button>
            </section>
        </li>   
    )
}