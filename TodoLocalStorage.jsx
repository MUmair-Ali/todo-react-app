
const todosKey = "TodoTask"


export const getTodoLocalStorage = () => {
        const rawTodos = localStorage.getItem(todosKey)
        return !rawTodos ? [] : JSON.parse(rawTodos)
    }

    export const setTodoLocalStorage = (task) => {
            return  localStorage.setItem(todosKey, JSON.stringify(task))
    }