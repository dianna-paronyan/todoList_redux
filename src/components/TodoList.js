import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList(){
    
    const todos = useSelector((state)=>{
        return state.todos;
    })
    
    return(
        <>
            {todos.map((todo)=>{
                return <TodoItem  key={todo.id} todo={todo}  />
            })}
        </>
    )
}

export default TodoList;