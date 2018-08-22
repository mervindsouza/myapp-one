import { Component, OnInit, Input } from '@angular/core';
// import { GridsterConfig, GridsterItem, GridType, DisplayGrid, CompactType, GridsterItemComponentInterface } from 'angular-gridster2';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user: any;
  // tslint:disable-next-line:no-input-rename
  @Input('name') userName: string;

  constructor() { }

  ngOnInit() {
    this.user = {
      name: this.userName,
      title: 'Software Architect',
      address: '1234 Yahoo Avenue, Santa Monica, California 90210',
      phone: ['+1312789789', '+91978787878'],
    };
  }
}
