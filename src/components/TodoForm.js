import { useDispatch } from 'react-redux';
import {useState} from 'react';
import { addTodo } from '../features/todos/todosSlice';
import styles from './TodoForm.module.css'


function TodoForm() {

    const [inputValue, setInputValue] = useState('');
  
    const dispatch = useDispatch();

    function add(){
        dispatch(
            addTodo({
                text: inputValue,
            })
        );
    }

    return (
      <div className={styles.content}>
          <form onSubmit={(e)=>{
                e.preventDefault();
                add();
                setInputValue('');
                }}>

                <input placeholder='add tasks...' className={styles.inputAdd} type='text' 
                    onChange={(e)=> setInputValue(e.target.value)}
                    value={inputValue}
                />
                <button className={styles.btnAdd}>Add</button>
          </form>
      </div>
    );
  }
  
  export default TodoForm;