import { Component } from '@angular/core';
import { Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-poll-dialog',
  templateUrl: './polls-dialog.component.html',
  styleUrls: ['./polls-dialog.component.scss']
})
export class PollsDialogComponent implements OnInit {
  public pollForm: FormGroup;
  public dialogTitle: string;

  constructor(
    public dialogRef: MatDialogRef<PollsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.setupForm();
    this.setDialogTitle();
  }

  setupForm(): void {
    // Initialize the form group and form controls with or without default values
    this.pollForm = new FormGroup({
      title: new FormControl(this.data.poll ? this.data.poll.title : '', Validators.required),
      // You can add more fields here if needed, e.g., description, options, etc.
    });
  }

  setDialogTitle(): void {
    // Set the dialog title based on whether it's a create or edit operation
    this.dialogTitle = this.data.poll ? 'Edit Poll' : 'Create New Poll';
  }

  onSave(): void {
    // When the save button is clicked, close the dialog and pass the form data back to the parent component
    if (this.pollForm.valid) {
      this.dialogRef.close(this.pollForm.value);
    }
  }

  onCancel(): void {
    // Optionally handle specific logic when cancelling the dialog
    this.dialogRef.close();
  }
}

