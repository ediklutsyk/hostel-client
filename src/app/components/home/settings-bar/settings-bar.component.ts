import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { RequestsDataService } from '../../../services/requests-data.service';

@Component({
  selector: 'app-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.scss']
})
export class SettingsBarComponent implements OnInit {

  @Output() apply = new EventEmitter();
  @Input() showOther = false;
  @Input() showOther2 = false;

  public priceRange = { min: 0, max: 0 };

  public roomsType;

  public subtypeRoom = [
    {
      id: 1,
      value: 'SINGLE',
      label: 'Single'
    },
    {
      id: 2,
      value: 'DORMS',
      label: 'Dorms'
    }
  ]

  public goods = [
    {
      value: 'wifi',
      label: 'Wi-Fi',
      checked: false
    },
    {
      value: 'tv',
      label: 'TV',
      checked: false
    },
    {
      value: 'kitchen',
      label: 'Kitchen',
      checked: false
    },
    {
      value: 'teaMaker',
      label: 'Tea Maker',
      checked: false
    },
    {
      value: 'coffeeMachine',
      label: 'Coffee Machine',
      checked: false
    }
  ]

  public beds;

  public form = {
    roomType1: '',
    numberOfGuests: '',
    min: '',
    max: '',
    roomType2: '',
    wifi: false,
    tv: false,
    kitchen: false,
    teaMaker: false,
    coffeeMachine: false
  }


  constructor(
    private requestsDataService: RequestsDataService
  ) { }

  ngOnInit() {
    this.requestsDataService.getPriceRange((response) => {
      console.log('success', response)
      this.priceRange = response[0];
    }, (error) => {
      console.log('error', error)
    })
    this.requestsDataService.getBeds((response) => {
      console.log('beds', response)
      this.beds = response;
      this.beds = this.beds.map((item) => {
        return {
          ...item,
          checked: false
        }
      })
    }, (error) => {
      console.log('error', error)
    })
    this.requestsDataService.getRoomTypes((response) => {
      console.log('roomsType', response)
      this.roomsType = response;
      this.roomsType = this.roomsType.map((item) => {
        return {
          ...item,
          checked: false
        }
      })
    }, (error) => {
      console.log('error', error)
    })
  }

  applyChanges() {
    if (!this.showOther) {
      this.apply.emit({
        roomType1: this.form.roomType1
      });
    } else {
      const filteredArray = this.roomsType.filter(item => item.checked);
      this.form.roomType2 = filteredArray.length ? filteredArray[0].roomTypeName : '';
      this.form.tv = this.goods.find(item => item.value === 'tv').checked;
      this.form.kitchen = this.goods.find(item => item.value === 'kitchen').checked;
      this.form.coffeeMachine = this.goods.find(item => item.value === 'coffeeMachine').checked;
      this.form.teaMaker = this.goods.find(item => item.value === 'teaMaker').checked;
      this.form.wifi = this.goods.find(item => item.value === 'wifi').checked;
      console.log('befire', this.form)
      const newObj = {};
      const values = Object.keys(this.form).filter(k => (typeof this.form[k] === "boolean" && this.form[k] === true) || (this.form[k] && this.form[k].length)).forEach((el) => {
        newObj[el] = this.form[el];
      })
      console.log('vakues', values, newObj)
      this.apply.emit(newObj);
    }
  }

}
