import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import { from } from 'rxjs';
import {storeInterface} from './store/store'
import {LoadTodosAction} from './store/actions/todo.action'
import {incremeantAction,decremeantAction} from './store/actions/counter.action'
import {nSelector} from './store/reducers/counter.reducer'
import {StoreTodoInterface} from './store/store'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;
  //كدة الكمبونت بيراقب الستات وبيجيب الداتا اللى موجودة جواها
  constructor(private store:Store<storeInterface>,private storeTodo:Store<StoreTodoInterface>){
    //select(nSelector) دى بدل ما اكتب فى الفنكشن صباسكريب
    //data => this.count = data.count.n
    //nSelectorدا بيرجع جزء نا الستات اللى هى ان
    this.store.select(nSelector).subscribe(data => this.count = data);
    this.storeTodo.subscribe(data => console.log(data.todos));

  }

  increase(){
    //dispatch() هى اللى بتنفذ لاكشن
    //payloadداتا بمررها للاكشن 
    this.store.dispatch(new incremeantAction(2))
  }
  decrease(){
    this.store.dispatch(new decremeantAction(2))

  }
  load() {
    this.store.dispatch(new LoadTodosAction())
  }
}
