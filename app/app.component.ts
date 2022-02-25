import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getTodos } from "./todos.reducers";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  todos$ : Observable<any>;

  constructor( private store : Store<any> ) {
    this.store.dispatch(getTodos());
    this.todos$ = store.select("todos");
  }
}