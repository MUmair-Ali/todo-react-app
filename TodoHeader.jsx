import { DateTime } from './DateTime';
import { FcTodoList } from "react-icons/fc";


export const TodoHeader = () => {

    return (
        <header className='header'>
            <h1> Todo List <FcTodoList /> </h1>
            <DateTime />
        </header>
    )
}