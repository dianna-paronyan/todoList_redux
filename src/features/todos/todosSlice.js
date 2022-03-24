import { createSlice } from '@reduxjs/toolkit';


export const initialState =[
  {
    id: Math.random(),
    text: 'Learn React hooks',
    isCompleted:false,
  },
  {
    id: Math.random(),
    text: 'Learn React router',
    isCompleted:false,
  },
  {
    id: Math.random(),
    text: 'Learn React custom hooks',
    isCompleted:false,
  }
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers:{
    addTodo: (state, action)=>{
          const newTodo = {
            id: Math.random(),
            text: action.payload.text,
            isCompleted:false,
          }
          state.push(newTodo);
      },
      deleteTodo: (state, action)=>{
          return state.filter((todo) => todo.id !== action.payload.id);
      }
  }
});


export const {addTodo, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;