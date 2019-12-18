import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnswerQuestionTypeComponent } from './text-answer-question-type.component';

describe('TextAnswerQuestionTypeComponent', () => {
  let component: TextAnswerQuestionTypeComponent;
  let fixture: ComponentFixture<TextAnswerQuestionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAnswerQuestionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnswerQuestionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
