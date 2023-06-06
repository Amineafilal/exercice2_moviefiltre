import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmGlobalExercice2Component } from './film-global-exercice2/film-global-exercice2.component';

const routes: Routes = [
  {
    path: '',
    component: FilmGlobalExercice2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
