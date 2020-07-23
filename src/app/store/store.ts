import {Counter,counterReducer} from './reducers/counter.reducer'
import {ActionReducerMap} from '@ngrx/store'
import {ToDo, TodosReducer} from './reducers/todo.reducer'
export interface customAction{
    type:string,
    payload:any
}

export interface storeInterface {
    counter:Counter
 }

 export interface StoreTodoInterface {
     counter: Counter,
     todos: ToDo[]
 }

 export const reducers ={
     counter: counterReducer,
      todos: TodosReducer
    } 
