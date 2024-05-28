import {Answer} from "./answer";

export class FormResponse {
  id: number;
  formId: number;
  respondentName: string;
  submissionTime: Date;
  answers: Answer[];
}


