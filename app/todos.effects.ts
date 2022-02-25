import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } 
  from "./todos.reducers";
import { TodosService } from "./todos.service";

@Injectable()
export class TodosEffects {
  constructor( 
    private actions$ : Actions, 
    private todosService : TodosService 
  ) {
  }

  // to label our property getTodos$ as an effect 
  // that will be triggered when we dispatch actions with the store.
  @Effect() getTodos$ = this.actions$  
    .ofType(GET_TODOS)     //for filtering actions by action type
    .switchMap(
      action =>
        this.todosService.getTodos()
          .map(todos => ({type: GET_TODOS_SUCCESS, payload: todos}))
          .catch(() => Observable.of({type: GET_TODOS_ERROR}))
    );
}