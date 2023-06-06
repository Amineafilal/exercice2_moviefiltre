import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmGlobalExercice2Component } from './film-global-exercice2.component';

describe('FilmGlobalExercice2Component', () => {
  let component: FilmGlobalExercice2Component;
  let fixture: ComponentFixture<FilmGlobalExercice2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmGlobalExercice2Component]
    });
    fixture = TestBed.createComponent(FilmGlobalExercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
