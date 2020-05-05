import { Component, OnInit } from '@angular/core';

import { RequestsDataService } from '../../services/requests-data.service';

const staff = []

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.scss']
})
export class StaffPageComponent implements OnInit {
  public data;

  constructor(
    private requestsDataService: RequestsDataService
  ) { }

  ngOnInit() {
    this.requestsDataService.getStaff((response) => {
      console.log('success', response)
      this.data = response;
    }, (error) => {
      console.log('error', error)
    })
  }

}
