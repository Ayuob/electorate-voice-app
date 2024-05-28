import { Injectable } from '@angular/core';
import {EMPTY, empty} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  addPoll(result: any) {

    return EMPTY
  }

  updatePoll(id: any, result: any) {
    return EMPTY
  }

  getPolls() {
    return EMPTY
  }

  deletePoll(id: any) {
    return EMPTY

  }
}
