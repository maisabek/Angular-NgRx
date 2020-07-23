import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { LOAD, SuccessAction, failedAction } from '../actions/todo.action';
import {mergeMap, map , catchError} from 'rxjs/operators'
import { of } from 'rxjs';
//service class
// @Injectable() عشان اقدر اعرف حاجات جوة الكلاس

@Injectable()
export class TodosEffect {
      //effect عبارة عن اوبزرفابل
    // createEffect() بتاخد فنكشن و لازم ترجع 
    // observableAction
         //عشان يراقب الاكشن
    todoEffect = createEffect(() => this.actions.pipe(
        //pipe() بتاخد مجموعة من الميثود بطبقها على الاويزرفابل بتاعى وفى النهاية بترجعلى اوبزرفابل
        ofType(LOAD), //عشان اشوف نوع الاكشن
        //mergeMap()عشان الفنكشن بايب بتحتاج اوبراتور مينفعش اديها اللينك اللى فية الداتا علطول
        mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/todos') //عشان اعمل فنكشن وترجع اوبزرفابل
                             //لما يجيب الداتا من الapi المفروض هيعمل اكشن

        .pipe(
             map((data) => new SuccessAction(data)), //لو نجح فى انة يجيب الداتا كدة هيحولة للاكشن اللى هو succedAction
             //of() عشان تحولة لابزروفابل
             catchError((err) => of(new failedAction(err))) //ودى لو منجحش هيروح للfalidAction
        
        ))
    ))
    constructor(private http:HttpClient, private actions : Actions){

    }
}