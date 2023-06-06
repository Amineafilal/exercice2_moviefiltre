import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmGlobalExercice2Component } from './film-global-exercice2/film-global-exercice2.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilmGlobalExercice2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
