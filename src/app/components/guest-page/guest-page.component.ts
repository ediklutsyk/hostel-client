import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RequestsDataService } from '../../services/requests-data.service';

@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrls: ['./guest-page.component.scss']
})
export class GuestPageComponent implements OnInit {
  public guest;
  id;

  constructor(
    private route: ActivatedRoute,
    private requestsDataService: RequestsDataService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.requestsDataService.getGuestById(this.id, (response) => {
      this.guest = response[0];
      this.requestsDataService.getServicesByGuestId(this.guest.guestId, (res) => {
        console.log('services by id', res)
        this.guest.services = res;
      }, (err) => {
        console.log('error', err)
      })
      console.log('response', response)
    }, (error) => {
      console.log('error', error)
    })
  }

}
