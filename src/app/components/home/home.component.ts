import { Component, OnInit } from '@angular/core';

import { RequestsDataService } from '../../services/requests-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showOther;
  public showOther2;

  public rooms;
  constructor(
    private requestsDataService: RequestsDataService
  ) { }

  ngOnInit() {
    this.requestsDataService.getRooms((response) => {
      console.log('response', response);
      this.rooms = response;
    }, (error) => {
      console.log('errors', error);
    })
  }

  searchRoom(event) {
    console.log('event', event)
    this.requestsDataService.getRoomById(event.target.value, (response) => {
      this.rooms = response;
    }, (error) => {
      console.log('error', error)
    })
  }

  filterData(event) {
    console.log('filter', event)
    if (!this.showOther) {
      console.log('event', event)
      let value = event.roomType1 === 'SINGLE' ? 'private' : 'dorms';
      this.requestsDataService.getRoomsByType1(value, (response) => {
        this.rooms = response;
        this.showOther = true;
      }, (error) => {
        console.log('error', error)
      })
    } else {
      if (Object.keys(event).length === 2 && event.numberOfGuests && event.roomType1) {
        let value = event.roomType1 === 'SINGLE' ? 'private' : 'dorms';
        this.requestsDataService.getRoomsWithGuests(value, event.numberOfGuests, (response) => {
          this.rooms = response;
          this.showOther2 = true;
        }, (error) => {
          console.log('error', error)
        })
      } else {
        const values = {
          ...event,
          roomsId: this.rooms.map(item => item.roomId)
        }
        this.requestsDataService.filterRooms(values, (response) => {
          this.rooms = response;
        }, (error) => {
          console.log('error', error)
        })
      }
    }
  }
}
