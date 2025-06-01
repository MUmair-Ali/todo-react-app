import { VscClearAll } from "react-icons/vsc";
import { VscCheckAll } from "react-icons/vsc";

export const TodoButtons = ({checkAll, clearAll}) => {

    return (
            <section className='btn-container'>
                <button className='button-base check-all-btn' onClick={checkAll}><VscCheckAll /></button>
                <button className='button-base clear-btn' onClick={() => clearAll([])}><VscClearAll /></button>
            </section>
    )
}