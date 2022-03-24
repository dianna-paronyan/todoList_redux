import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todosSlice";
import styles from './TodoItems.module.css'

function TodoItem({todo}){

    const dispatch = useDispatch();

    function onDelete(){
         dispatch(
            deleteTodo({
                id: todo.id,
            })
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.box}>
            
                {todo.text}
                
                <button className={styles.btnDelete} onClick={onDelete}>x</button>
            </div>
        </div>
    )
}

export default TodoItem;