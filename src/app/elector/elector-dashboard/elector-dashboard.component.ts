import { Component } from '@angular/core';

@Component({
  selector: 'app-elector-dashboard',
  templateUrl: './elector-dashboard.component.html',
  styleUrls: ['./elector-dashboard.component.scss']
})
export class ElectorDashboardComponent {

  sections = [
    { title: 'Current Polls', icon: 'how_to_vote', content: 'Participate in ongoing polls.' },
    { title: 'Candidate Profiles', icon: 'person_search', content: 'Explore candidate profiles and their agendas.' },
    { title: 'Historical Data', icon: 'history', content: 'Review past election results and trends.' }
  ];
}
