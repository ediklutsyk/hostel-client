import { Component, OnInit } from '@angular/core';

import { RequestsDataService } from '../../services/requests-data.service';

const guests_services = [];

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {
  public data = guests_services;
  public amount;
  public price;

  constructor(private requestsDataService: RequestsDataService) { }

  ngOnInit() {
    this.requestsDataService.getPricesGuests((response) => {
      console.log('response', response)
      this.data = response;
    }, (error) => {
      console.log('error', error)
    })
  }

  searchData() {
    if (this.amount && this.price) {
      this.requestsDataService.getServicesByFilter(`?price=${this.price}&amount=${this.amount}`, (response) => {
        this.data = response;
      }, (error) => {
        console.log('error', error)
      })
    } else if (this.amount) {
      this.requestsDataService.getServicesByFilter(`?amount=${this.amount}`, (response) => {
        this.data = response;
      }, (error) => {
        console.log('error', error)
      })
    } else if (this.price) {
      this.requestsDataService.getServicesByFilter(`?price=${this.price}`, (response) => {
        this.data = response;
      }, (error) => {
        console.log('error', error)
      })
    }
  }

}
