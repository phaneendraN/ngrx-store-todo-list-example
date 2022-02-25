import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo.component';
import { TodosComponent } from './todos.component';
import { todos } from './todos.reducers';
import { TodosService } from './todos.service';
import { TodosEffects } from './todos.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos }),
    EffectsModule.forRoot([TodosEffects]),
  ],
  declarations: [AppComponent, TodoComponent, TodosComponent],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
