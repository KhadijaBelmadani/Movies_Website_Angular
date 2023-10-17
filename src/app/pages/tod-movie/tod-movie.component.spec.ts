import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodMovieComponent } from './tod-movie.component';

describe('TodMovieComponent', () => {
  let component: TodMovieComponent;
  let fixture: ComponentFixture<TodMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodMovieComponent]
    });
    fixture = TestBed.createComponent(TodMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
