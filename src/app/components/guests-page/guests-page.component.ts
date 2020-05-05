import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GuestDialogComponent } from '../guest-dialog/guest-dialog.component';

import { RequestsDataService } from '../../services/requests-data.service';

@Component({
  selector: 'app-guests-page',
  templateUrl: './guests-page.component.html',
  styleUrls: ['./guests-page.component.scss']
})
export class GuestsPageComponent implements OnInit {
  public typeItems = 'all';
  public data;
  public search;

  constructor(
    public dialog: MatDialog,
    private requestsDataService: RequestsDataService
  ) { }

  ngOnInit() {
    this.requestsDataService.getGuests((response) => {
      console.log('success', response)
      this.data = response;
    }, (error) => {
      console.log('error', error)
    })
  }

  changeType(type) {
    this.typeItems = type;
    if (type === 'price') {
      this.requestsDataService.getPricesGuests((response) => {
        this.data = response;
      }, (error) => {
        console.log('error', error)
      })
    } else if (type === 'active') {
      this.requestsDataService.getActiveGuests((response) => {
        this.data = response;
      }, (error) => {
        console.log('error', error)
      })
    } else {
      console.log('error')
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(GuestDialogComponent, {
      width: '500px'
    });
  }

  searchGuests(event) {
    console.log('event', event)
    this.requestsDataService.getGuesrsBySearch(event.target.value, (response) => {
      this.data = response;
    }, (error) => {
      console.log('error', error)
    })
  }

}
