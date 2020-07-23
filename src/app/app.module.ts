import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {reducers} from './store/store'
import {EffectsModule} from '@ngrx/effects'
import {HttpClientModule} from '@angular/common/http'
import {TodosEffect} from './store/effects/todo.effect'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodosEffect]),
    //instrument() عشان اظبط اعددات ال
    //devTools
    StoreDevtoolsModule.instrument({
      maxAge: false  // اقصى عدد من الاكشن اللى تتحط فى الهستورى ممكن اديها رقم او فالس وفالس هنا معنها اى عدد
      

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
