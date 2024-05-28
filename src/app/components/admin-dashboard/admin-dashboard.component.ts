import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  tiles = [
    { text: 'Manage Polls', cols: 1, rows: 1, color: 'lightblue', icon: 'how_to_vote', iconLabel: 'Manage Polls', content: 'Create, edit, and delete polls.' },
    { text: 'View Results', cols: 1, rows: 1, color: 'lightgreen', icon: 'bar_chart', iconLabel: 'View Results', content: 'See latest poll results.' },
    { text: 'Admin Tools', cols: 1, rows: 1, color: 'lightpink', icon: 'settings', iconLabel: 'Admin Tools', content: 'Access system settings and tools.' }
  ];
}
