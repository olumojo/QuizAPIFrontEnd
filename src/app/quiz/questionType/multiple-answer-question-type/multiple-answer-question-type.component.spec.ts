import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAnswerQuestionTypeComponent } from './multiple-answer-question-type.component';

describe('MultipleAnswerQuestionTypeComponent', () => {
  let component: MultipleAnswerQuestionTypeComponent;
  let fixture: ComponentFixture<MultipleAnswerQuestionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleAnswerQuestionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleAnswerQuestionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
