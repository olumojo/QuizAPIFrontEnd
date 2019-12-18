import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingAnswerQuestionTypeComponent } from './coding-answer-question-type.component';

describe('CodingAnswerQuestionTypeComponent', () => {
  let component: CodingAnswerQuestionTypeComponent;
  let fixture: ComponentFixture<CodingAnswerQuestionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingAnswerQuestionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingAnswerQuestionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
