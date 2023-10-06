 
import {createSlice, nanoid } from '@reduxjs/toolkit';



const initialState = {
    todos: [
      {
        id: 1,
        text: "lorem ipsum dollor 1233"
      }
    ]
  }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo:(state,action)=>{
           
            let { id,text } = action.payload;
            const data = state.todos.find((item) => 
              item.id ===  id  );

            if(data)
            {
             data.text= text
            }  
          
        }
    }

})

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer