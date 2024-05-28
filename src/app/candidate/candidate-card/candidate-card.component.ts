import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss']
})
export class CandidateCardComponent {
  @Input() candidate: any; // Assume 'candidate' is an object with properties such as name, party, bio, and imageUrl.

  viewDetails(candidate: any) {
    // This can navigate to a detailed view or emit an event to the parent component
    console.log('Viewing details for:', this.candidate.name);
  }
}

