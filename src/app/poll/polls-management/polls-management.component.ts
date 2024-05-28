import { Component } from '@angular/core';


import {  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { PollService } from '../poll.service';
import { PollsDialogComponent} from "../polls-dialog/polls-dialog.component";
import {ConfirmDialogComponent} from "../../layout/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-polls-management',
  templateUrl: './polls-management.component.html',
  styleUrls: ['./polls-management.component.scss']
})
export class PollsManagementComponent implements OnInit {
  displayedColumns: string[] = ['title', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, private pollService: PollService) {}

  ngOnInit() {
    this.loadPolls();
  }

  loadPolls() {
    this.pollService.getPolls().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    }, error => {
      console.error('Error retrieving polls:', error);
    });
  }

  openDialog(action: string, poll?: any) {
    const dialogRef = this.dialog.open(PollsDialogComponent, {
      width: '250px',
      data: { poll: poll, action: action }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'create') {
          this.pollService.addPoll(result).subscribe(() => {
            this.loadPolls();  // refresh the list
          });
        } else if (action === 'edit') {
          this.pollService.updatePoll(poll.id, result).subscribe(() => {
            this.loadPolls();  // refresh the list
          });
        }
      }
    });
  }

  confirmDelete(poll: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { title: "Confirm Delete", message: "Are you sure you want to delete this poll?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pollService.deletePoll(poll.id).subscribe(() => {
          this.loadPolls();  // refresh the list
        });
      }
    });
  }
}

