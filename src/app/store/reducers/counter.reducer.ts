import {customAction} from '../store'
import {INCREMEANT,DECREMEANT} from '../actions/counter.action'
import {createFeatureSelector,createSelector} from '@ngrx/store'

 
 export interface Counter {
     n:0
 }
 
 let initialState ={
     n:0
 }


export function counterReducer(state = initialState,action:customAction){
    switch(action.type){
        case INCREMEANT:
            return{
                n: state.n + action.payload
            }
        case DECREMEANT:
            return {
                n: state.n - action.payload
            }
        default:
            return state        


    }

    

}

let counterFs= createFeatureSelector<Counter>('counter')
export let nSelector= createSelector(counterFs, state => state.n) //هيرجع جزء من الستات اللى هو ال n
