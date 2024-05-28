import { Component, OnInit } from '@angular/core';
import {filter, Observable} from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import {CandidateService} from "../candidate.service";

@Component({
  selector: 'app-candidate-information',
  templateUrl: './candidate-information.component.html',
  styleUrls: ['./candidate-information.component.scss']
})
export class CandidateInformationComponent implements OnInit {
  candidates: Observable<any[]>;
  filter: FormControl;
  searchText: any;
  searchTerm: string;

  private allCandidates: any[] = [];  // Store all candidates here
  filteredCandidates: any[] = [];  // Store filtered candidates to display


  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe(candidates => {
      this.allCandidates = candidates;
      this.filteredCandidates = candidates;  // Initially show all candidates
    });
  }

  constructor(private candidateService: CandidateService) {
    this.filter = new FormControl('');
  }

  // ngOnInit(): void {
  //   this.loadCandidates();
  //   this.setupFilter();
  // }

  loadCandidates(): void {
    this.candidates = this.candidateService.getCandidates();
    // In a real app, getCandidates would fetch data from a server
  }

  // setupFilter(): void {
  //   this.filteredCandidates = this.filter.valueChanges.pipe(
  //     startWith(''),
  //     map(text => this.search(text))
  //   );
  // }

  // search(text: string): any[] {
  //   return this.candidates.pipe(
  //     map(candidates =>
  //       candidates.filter(candidate => {
  //         const term = text.toLowerCase();
  //
  //         return candidate.name.toLowerCase().includes(term)
  //           || candidate.party.toLowerCase().includes(term)
  //           || candidate.issues.some((issue: string) => issue.toLowerCase().includes(term));
  //       })
  //     )
  //   );
  // }

  search(text: string): void {
    const term = text.toLowerCase();
    this.filteredCandidates = this.allCandidates.filter(candidate => {
      return candidate.name.toLowerCase().includes(term)
        || candidate.party.toLowerCase().includes(term)
        || candidate.issues.some((issue: string) => issue.toLowerCase().includes(term));
    });
  }

}
