import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';

import { RequestsDataService } from '../../services/requests-data.service';

import * as moment from 'moment'; // add this 1 of 4
import { GuestDialogComponent } from '../guest-dialog/guest-dialog.component';

const GUESTS_DATA = [
  {
    id: 1,
    name: 'Kalum Thorpe',
    daysToGo: 3,
    email: 'catererjames@outlook.com',
    phone: '447941626972'
  }
]

const CLEANING_STAFF = [
  {
    id: 1,
    name: 'John Stetham',
    date: moment("2020-05-05 12:00:00").format('DD-MMM-YYYY HH:mm')
  },
  {
    id: 2,
    name: 'John Stetham',
    date: moment("2020-05-05 12:00:00").format('DD-MMM-YYYY HH:mm')
  }
]

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss']
})
export class RoomPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'checkOutDate'];
  displayedCOlumnsStaff: string[] = ['id', 'name', 'surname', 'date'];
  dataSource = GUESTS_DATA;
  dataStaff = CLEANING_STAFF;
  id;

  public room;
  public nights;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private requestsDataService: RequestsDataService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.requestsDataService.getRoomById(this.id, (response) => {
      this.room = response[0];
      this.requestsDataService.getGuestsByRoomId(this.id, (res) => {
        console.log('guests by id', res)
        this.dataSource = res;
      }, (err) => {
        console.log('error', err)
      })
      this.requestsDataService.getCleaningsByRoomId(this.id, (res) => {
        console.log('cleaning by id', res)
        this.dataStaff = res;
      }, (err) => {
        console.log('error', err)
      })
      console.log('response', response)
    }, (error) => {
      console.log('error', error)
    })
  }

  openDialog() {
    console.log("nights", this.nights);
    const dialogRef = this.dialog.open(GuestDialogComponent, {
      width: '500px',
      data: {
        room: this.room,
        days: this.nights
      }
    });
  }

}
