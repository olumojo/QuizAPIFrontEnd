import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { SingleAnswerQuestionTypeComponent } from './questionType/single-answer-question-type/single-answer-question-type.component';
import { MultipleAnswerQuestionTypeComponent } from './questionType/multiple-answer-question-type/multiple-answer-question-type.component';
import { TextAnswerQuestionTypeComponent } from './questionType/text-answer-question-type/text-answer-question-type.component';
import { CodingAnswerQuestionTypeComponent } from './questionType/coding-answer-question-type/coding-answer-question-type.component';
import { QuizInstructionComponent } from './quiz-instruction/quiz-instruction.component';

@NgModule({
  declarations: [TakeQuizComponent, CreateQuizComponent, SingleAnswerQuestionTypeComponent, MultipleAnswerQuestionTypeComponent, TextAnswerQuestionTypeComponent, CodingAnswerQuestionTypeComponent, QuizInstructionComponent],
  imports: [
    CommonModule
  ]
})
export class QuizModule { }
