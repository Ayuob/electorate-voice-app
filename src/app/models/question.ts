
export class Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: string[]; // For multiple-choice questions
}

export enum QuestionType {
  Text = 'text',
  TextArea = 'textarea',
  MultipleChoice = 'multiple-choice',
  // Add more types as needed
}
