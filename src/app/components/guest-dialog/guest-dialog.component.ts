import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RequestsDataService } from '../../services/requests-data.service';

@Component({
  selector: 'app-guest-dialog',
  templateUrl: './guest-dialog.component.html',
  styleUrls: ['./guest-dialog.component.scss']
})
export class GuestDialogComponent implements OnInit {
  doesntExist = true;

  form = {
    phone: '',
    name: '',
    surname: '',
    email: ''
  }

  constructor(
    public dialogRef: MatDialogRef<GuestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private requestsDataService: RequestsDataService
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.form = {
      phone: '',
      name: '',
      surname: '',
      email: ''
    }
    this.dialogRef.close();
  }

  addGuest() {
    const values = {
      ...this.form,
      room: this.data.room.roomId,
      days: this.data.days
    }
    console.log(this.data, values)
    this.requestsDataService.addGuest(values, (response) => {
      this.dialogRef.close();
    }, (error) => {
      console.log('error', error)
    })
  }

}
