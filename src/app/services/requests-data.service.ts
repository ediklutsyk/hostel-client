import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class RequestsDataService {

  constructor(
    private apiService: ApiService
  ) { }

  getRooms(success, error) {
    this.apiService.get({
      url: '/rooms',
      handlers: {
        success,
        error
      }
    })
  }

  getRoomById(id, success, error) {
    this.apiService.get({
      url: `/rooms/id?id=${id}`,
      handlers: {
        success,
        error
      }
    })
  }

  getGuestsByRoomId(id, success, error) {
    this.apiService.get({
      url: `/rooms/guests?id=${id}`,
      handlers: {
        success,
        error
      }
    })
  }

  getCleaningsByRoomId(id, success, error) {
    this.apiService.get({
      url: `/rooms/cleaning?id=${id}`,
      handlers: {
        success,
        error
      }
    })
  }

  getPriceRange(success, error) {
    this.apiService.get({
      url: '/rooms/price-range',
      handlers: {
        success,
        error
      }
    })
  }

  getBeds(success, error) {
    this.apiService.get({
      url: '/rooms/beds',
      handlers: {
        success,
        error
      }
    })
  }

  getRoomTypes(success, error) {
    this.apiService.get({
      url: '/room-type/rooms/amount',
      handlers: {
        success,
        error
      }
    })
  }

  getGuests(success, error) {
    this.apiService.get({
      url: '/guests',
      handlers: {
        success,
        error
      }
    })
  }

  getGuestById(id, success, error) {
    this.apiService.get({
      url: `/guests/id?id=${id}`,
      handlers: {
        success,
        error
      }
    })
  }

  getServicesByGuestId(id, success, error) {
    this.apiService.get({
      url: `/services?id=${id}`,
      handlers: {
        success,
        error
      }
    })
  }

  getGuesrsBySearch(search, success, error) {
    this.apiService.get({
      url: `/guests/search?surname=${search}`,
      handlers: {
        success,
        error
      }
    })
  }

  getServicesByFilter(query, success, error) {
    this.apiService.get({
      url: `/services/filter${query}`,
      handlers: {
        success,
        error
      }
    })
  }

  getActiveGuests(success, error) {
    this.apiService.get({
      url: '/guests/active',
      handlers: {
        success,
        error
      }
    })
  }

  getPricesGuests(success, error) {
    this.apiService.get({
      url: '/guests/prices',
      handlers: {
        success,
        error
      }
    })
  }

  getAllRooms(success, error) {
    this.apiService.get({
      url: '/rooms',
      handlers: {
        success,
        error
      }
    })
  }

  getStaff(success, error) {
    this.apiService.get({
      url: '/staff',
      handlers: {
        success,
        error
      }
    })
  }

  getRoomsByType1(type, success, error) {
    this.apiService.get({
      url: `/rooms/${type}`,
      handlers: {
        success,
        error
      }
    })
  }

  getRoomsWithGuests(type, number, success, error) {
    this.apiService.get({
      url: `/rooms/${type}/guests?amount=${number}`,
      handlers: {
        success,
        error
      }
    })
  }

  filterRooms(body, success, error) {
    this.apiService.post({
      url: '/rooms/filter',
      body,
      handlers: {
        success,
        error
      }
    })
  }

  addGuest(body, success, error) {
    this.apiService.post({
      url: '/guests',
      body,
      handlers: {
        success,
        error
      }
    })
  }
}
