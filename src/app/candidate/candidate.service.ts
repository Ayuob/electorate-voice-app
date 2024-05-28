import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private candidates = [
    { name: 'John Doe', party: 'Liberal', bio: 'Description here', imageUrl: 'url', issues: ['economy', 'education'] },
    // More candidates
  ];

  constructor() { }

  getCandidates(): Observable<any[]> {
    return of(this.candidates); // Simulate API call
  }
}
