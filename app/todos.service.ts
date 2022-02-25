import { HttpClient } from '@angular/common/http/public_api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';

@Injectable()
export class TodosService {
  constructor(public http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((res) => res));
    // const todos = [
    //   {id: 1, title: "Learn ngrx/store", completed: false},
    //   {id: 2, title: "Learn ngrx/effects", completed: false}
    // ];

    // return Observable
    //   .timer(1000)     //faking http request
    //   .mapTo(todos);
  }
}
