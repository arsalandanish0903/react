import {createSlice, nanoid} from '@reduxjs/toolkit'

export const initialState = {
    todos:[
        {id:1, title:'todo1', completed:false},
    ]
}
const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer
