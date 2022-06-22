import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPipeComponent } from './learn-pipe.component';

describe('LearnPipeComponent', () => {
  let component: LearnPipeComponent;
  let fixture: ComponentFixture<LearnPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
