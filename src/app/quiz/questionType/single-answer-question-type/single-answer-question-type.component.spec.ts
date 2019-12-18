import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAnswerQuestionTypeComponent } from './single-answer-question-type.component';

describe('SingleAnswerQuestionTypeComponent', () => {
  let component: SingleAnswerQuestionTypeComponent;
  let fixture: ComponentFixture<SingleAnswerQuestionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAnswerQuestionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAnswerQuestionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
