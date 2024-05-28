import { Component, EventEmitter, Output } from '@angular/core';
import { Question, QuestionType } from '../../models/question';

@Component({
  selector: 'app-question-builder',
  templateUrl: './question-builder.component.html',
  styleUrls: ['./question-builder.component.scss']
})
export class QuestionBuilderComponent {

  newQuestion: Question = new Question();
  questionTypes = Object.values(QuestionType);

  @Output() addQuestionEvent = new EventEmitter<Question>();

  addQuestion(): void {
    // Validate and emit the new question to the parent component
    if (this.newQuestion.text && this.newQuestion.type) {
      this.addQuestionEvent.emit({ ...this.newQuestion });
      this.newQuestion = new Question(); // Clear the new question for the next input
    }
  }
}



