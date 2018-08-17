import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user: any;

  constructor() {
    this.user = {
      name: 'John Smith',
      title: 'Software Architect',
      address: '1234 Yahoo Avenue, Santa Monica, California 90210',
      phone: ['+1312789789', '+91978787878'],
    };
  }
  ngOnInit() {
  }

}
